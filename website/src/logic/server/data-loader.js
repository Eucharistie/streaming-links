import fs from 'fs'
import { safeLoad, CORE_SCHEMA } from 'js-yaml'
const Ajv = require('ajv');

const rootPath = '../'
const channelPath = rootPath + 'data/channels/'

const schemaParserWithEarlyExit = new Ajv({loadSchema})
const schemaParserWithLastExit = new Ajv({allErrors: true, loadSchema})

const schemaText = fs.readFileSync(rootPath + 'schema/channel.schema.json', 'utf-8')
export const schema = JSON.parse(schemaText)

export async function loadAllChannels(waitForAllErrors) {
	const channels = await parseAllChannels()
	const validatedChannels = channels.map(
		promise => validateChannelPromise(promise, waitForAllErrors)
	)
	const waitFor = waitForAllErrors ? waitAndCaptureAllErrorsIn : waitWithEarlyExit
	return await waitFor(validatedChannels)
}

export function loadChannel(filename) {
	return validateChannelPromise( parseChannel(filename) )
}

export async function parseAllChannels() {
	return (await fs.promises.readdir(channelPath))
		.filter(name => name[0] != '.' || name[0] != '_')
		.map(parseChannel)
}

function parseChannel(filename) {
	return fs.promises
		.readFile(channelPath + filename, 'utf-8')
		.then(text => parse(text, filename))
}

export async function validateChannelPromise(channelPromise, waitForAllErrors) {
	const parser = waitForAllErrors ? schemaParserWithLastExit : schemaParserWithEarlyExit
	const [[channelName, channel], conformsToSchema] = await Promise.all([channelPromise, parser.compileAsync(schema)])
	if (conformsToSchema(channel) && hasValidPointers(channel, conformsToSchema)) {
		return [channelName, channel]
	} else {
		const errorList = JSON.stringify(conformsToSchema.errors.reverse(), undefined, '  ')
		throw new Error(`Channel ${channelName} does not conform to channel schema: ${errorList}`)
	}
}

const inconsistentValidationCode = new Error('Pointer validation code does not reflect channel schema anymore')
try {
	const hasLocationReference = schema.properties.eucharistTimetable.items.allOf[0].properties.location.type == 'integer'
	const hasLocations = schema.properties.locations.type == 'array'
	if (!hasLocationReference || !hasLocations) {
		throw inconsistentValidationCode
	}
} catch {
	throw inconsistentValidationCode
}
function hasValidPointers(channel, ref) {
	const locationCount = channel.locations.length
	const errors = []
	channel.eucharistTimetable.forEach((timetableEntry, index) => {
		if (timetableEntry.location >= locationCount) {
			errors.push({
				keyword: 'max',
				dataPath: `.eucharistTimetable[${index}].location`,
				schemaPath: '#/properties/eucharistTimetable/items/allOf/0/properties/location/type',
				params: {
					max: '#.locations.length'
				},
				"message": "is not a valid index into the '.locations' array"
			})
		}
	})
	if (errors.length == 0) {
		return true
	} else {
		ref.errors = errors
		return false
	}
}

function parse(text, filename) {
	try {
		return [
			filename,
			safeLoad(text, {schema: CORE_SCHEMA})
		]
	} catch (error) {
		console.error('Could not parse yaml file', filename)
		throw error
	}
}

/**
 * 
 * Aggregates the results of multiple promises into one promise.
 * 
 * The returned promise will
 *  - **Fullfill** when all the input promises are fulfilled (or if there is no input).
 *  - **Reject** if one or more of the input promises are fulfilled.
 * 
 * Differs from Promise.all because it waits until all failing promises are rejected. It does **not** exit after the first rejection but collects all errors and then rejects with a list of these errors.
 * 
 * @param {Promise[]} promises An iterable object such as an Array.
 * @returns {Promise<Array>}
 */
function waitAndCaptureAllErrorsIn(promises) {
	return new Promise(wait)
	function wait(resolve, reject) {
		if (promises.length == 0) {
			resolve()
			return
		}
		let semaphore = promises.length
		const results = []
		const errors = []
		promises.forEach( (promise, index) =>
			promise
				.then(value => results[index] = value)
				.catch(error => errors.push(error))
				.finally(publish)
		)

		function publish() {
			if (--semaphore == 0) {
				if (errors.length == 0) resolve(results)
				else reject(errors)
			}
		}
	}
}

/**
 * 
 * Wrapper around Promise.all
 * 
 * @param {Promise[]} promises An array of promises
 * @returns {Promise<Array>}
 */
function waitWithEarlyExit(promises) {
	return Promise.all(promises)
}

function loadSchema() {
	throw new Error('Remote schema loading not supported')
}
import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});

import yaml, { safeLoad } from 'js-yaml'
import fs from 'fs'

console.log('')
console.log('--- file parsing ---')

const channelPath = './data/old/'
const channelsFiles = fs.readdirSync(channelPath).filter(name => name[0] != '.')
const filesProgress = []
const channelFields = new Map()
const timeTableFields = new Map()
const timeEntryKinds = new Set()
for (const channelFile of channelsFiles) {
	const filePath = channelPath + channelFile
	console.log('reading', channelFile)
	filesProgress.push( new Promise(readChannelFile) )
	async function readChannelFile(resolvePromise, rejectPromise) {
		try {
			const channelTextContent = await fs.promises.readFile(filePath, 'utf-8')
			parseChannel(channelTextContent, channelFile)
		} catch (error) {
			rejectPromise(error)
			console.warn('Problem while parsing', channelFile)
			console.error(error)
		}
		resolvePromise()
		console.log('done', channelFile)
	}
}

Promise.all(filesProgress).then(files => {
	console.log('all files read')
	for (const [field, meta] of channelFields) {
		console.log(`**${field}**`, '→', meta.map(i => `\`${i.type}\` ${i.value} (${i.file})`).join(' |OR| '))
		if (field == 'timetable') {
			for (const [field, meta] of timeTableFields) {
				console.log(`  **${field}**`, '→', meta.map(i => `\`${i.type}\` ${i.value} (${i.file})`).join(' |OR| '))
				if (field == 'kind') {
					console.log('    values:', timeEntryKinds)
				}
			}
		}
	}
})

function parseChannel(yamlText, file) {
	const channel = yaml.safeLoadAll(yamlText)[0]
	for (const field in channel) {
		const value = channel[field]
		const rawType = typeof value
		const type = Array.isArray(value) ? 'array' : rawType
		const meta = {type, value, file}
		if (channelFields.has(field)) {
			if (channelFields.get(field).findIndex(ofSameType) == -1) 
				channelFields.get(field).push(meta)
		} else {
			channelFields.set(field, [meta])
		}

		function ofSameType(otherMeta) {
			return otherMeta.type == type
		}
	}

	if (channel.timetable)
	for (const entry of channel.timetable) {
		for (var field in entry) {
			const value = entry[field]
			const rawType = typeof value
			const type = Array.isArray(value) ? 'array' : rawType
			const meta = {type, value, file}
			if (timeTableFields.has(field)) {
				const oldValue = timeTableFields.get(field)
				const index = oldValue.findIndex(ofSameType)
				if (index == -1)
					oldValue.push(meta)
			} else {
				timeTableFields.set(field, [meta])
			}
			if (field == 'kind') {
				timeEntryKinds.add(value)
			}

			function ofSameType(otherMeta) {
				return otherMeta.type == type
			}	
		}
	}
}

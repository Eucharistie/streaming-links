import {inDevMode} from '../../logic/runtime'

export const createResponders = inDevMode ? createDevelopmentResponders : createProductionResponsers

export function createDevelopmentResponders(response) {
	return {
		sendResult(channels) { sendResult(response, channels) },
		sendError(errors) { sendFullError(response, errors) }
	}
}

export function createProductionResponsers(response) {
	return {
		sendResult: channels => sendResult(response, channels),
		sendError: errors => sendShortError(response, errors)
	}
}

function sendResult(response, channels) {
	response.setHeader('Content-Type', 'application/json')
	response.end(JSON.stringify(channels))	
}

const errorMessage = 'Channels do not conform to channel schema'
function writeErrorPrefix(response, errors) {
	console.error(errorMessage, errors)
	response.writeHead(500, { 'Content-Type': 'text/plain' })
	response.write(errorMessage)
}

function sendFullError(response, errors) {
	writeErrorPrefix(response, errors)
	response.write('\n')
	response.write(errors.map(e => e.message).join(',\n'))
	response.end()
}

function sendShortError(response, errors) {
	writeErrorPrefix(response, errors)
	response.end()
}
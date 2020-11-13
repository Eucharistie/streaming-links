import {loadAllChannels} from '../../data-loader.js'
import {inDevMode} from '../../logic/runtime'

function getAllChannels(waitForAllErrors) {
	return loadAllChannels(waitForAllErrors)
		.then(channels => channels.map(([channel, id]) => ({...channel, id: id.replace('.yaml', '')})))
}

export function get(request, response) {
	if (inDevMode) {
		getAllChannels(true)
			.then(sendResult)
			.catch(sendError)
	} else {
		if (cachedChannelErrors.length > 0) {
			sendError(cachedChannelErrors)
			return
		}
		cachedChannels.then(sendResult)	
	}

	function sendResult(channels) {
		response.setHeader('Content-Type', 'application/json')
		response.end(JSON.stringify(channels))	
	}

	function sendError(errors) {
		console.error('Channels do not conform to channel schema', errors)
		response.writeHead(500, { 'Content-Type': 'text/plain' })
		response.write('Channels do not conform to channel schema\n')
		if (inDevMode) response.write(errors.map(e => e.message).join(',\n'))
		response.end()
	}
}

let cachedChannelErrors = []
const cachedChannels = getAllChannels(inDevMode)
	.catch(errors => {
		cachedChannelErrors = errors
		console.error('Channels do not conform to channel schema', errors)
	})
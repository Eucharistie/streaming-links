import {loadAllChannels} from '../../data-loader.js'

let channelErrors = []
const channels = loadAllChannels(true)
	.then(channels => channels.map(([channel, id]) => ({...channel, id: id.replace('.yaml', '')})))
	.catch(errors => {
		channelErrors = errors
		console.error('Channels do not conform to channel schema', errors)
	})

export function get(request, response) {
	if (channelErrors.length > 0) {
		sendError(channelErrors)
		return
	}

	channels.then(sendResult)

	function sendResult(channels) {
		response.setHeader('Content-Type', 'application/json')
		response.end(JSON.stringify(channels))	
	}

	function sendError(errors) {
		console.error('Channels do not conform to channel schema', errors)
		response.statusCode = 500
		response.end('Channels do not conform to channel schema')
	}
}
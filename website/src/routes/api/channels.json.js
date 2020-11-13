import {inDevMode} from '../../logic/runtime'
import {getAllChannels} from '../../logic/server/channel cache'

export function get(request, response) {
	getAllChannels()
		.then(sendResult)
		.catch(sendError)

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
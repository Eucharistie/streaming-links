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
		const errorMessage = 'Channels do not conform to channel schema'
		console.error(errorMessage, errors)
		response.writeHead(500, { 'Content-Type': 'text/plain' })
		response.write(errorMessage)
		if (inDevMode) {
			response.write('\n')
			response.write(errors.map(e => e.message).join(',\n'))
		}
		response.end()
	}
}
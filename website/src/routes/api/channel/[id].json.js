import { getChannel } from '../../../logic/server/channel cache'

export function get(request, response) {
	const id = request.params['id']
	
	if (id) {
		getChannel(id)
			.then(sendChannel)
			.catch(sendError)
	} else {
		const error = new Error('Channel ID must be specified')
		error.code = 412
		sendError(error)
	}
		
	function sendChannel(channel) {
		response.setHeader('Content-Type', 'application/json')
		response.end(JSON.stringify(channel))	
	}

	function sendError(error) {
		console.error(error)
		response.writeHead(error.code || 500, { 'Content-Type': 'text/plain' })
		response.end(error.message)
	}
}
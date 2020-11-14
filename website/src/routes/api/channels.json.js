import {getAllChannels} from '../../logic/server/channel cache'
import {createResponders} from '../../logic/server/channels http responses'

export function get(_, response) {
	const {sendResult, sendError} = createResponders(response)

	getAllChannels()
		.then(sendResult)
		.catch(sendError)
}
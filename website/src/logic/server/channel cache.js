import {loadAllChannels} from '../../data-loader.js'
import {inDevMode} from '../../logic/runtime'

export function getAllChannels() {
	return inDevMode ? getAllTransformedChannels(true) : cachedChannels
}

async function getAllTransformedChannels(waitForAllErrors) {
	const channels = await loadAllChannels(waitForAllErrors)
	return channels.map(transform)
}

function transform([channel, id]) {
	return {
		...channel,
		id: id.replace('.yaml', '')
	}
}

const cachedChannels = getAllTransformedChannels(inDevMode)
cachedChannels.catch(errors => {
	cachedChannelErrors = errors
	console.error('Channels do not conform to channel schema', errors)
})
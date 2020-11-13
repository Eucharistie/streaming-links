import {loadAllChannels, loadChannel} from '../../data-loader.js'
import {inDevMode} from '../../logic/runtime'

export function getAllChannels() {
	return inDevMode ? getAllTransformedChannels(true) : cachedChannels
}


export async function getChannel(id) {
	if (inDevMode) {
		const channels = await cachedMap
		if (!channels.has(id)) throw new ChannelNotFoundError(id)
		return channels.get(id)
	} else {
		return loadChannel(id + extension)
	}
}

async function getAllTransformedChannels(waitForAllErrors) {
	const channels = await loadAllChannels(waitForAllErrors)
	return channels.map(useFileNameAsID)
}

function useFileNameAsID([id, channel]) {
	return {
		...channel,
		id: id.replace(extension, '')
	}
}

const extension = '.yaml'
const cachedChannels = getAllTransformedChannels(inDevMode)
cachedChannels.catch( errors => console.error('Channels do not conform to channel schema', errors) )

export const cachedMap = cachedChannels.then(channels =>
	new Map(
		channels.map(channel => [channel.id, channel])
	)
)

export class ChannelNotFoundError extends Error {
	constructor(id) {
		super(`Channel '${id}' not found`)
		this.code = 404
	}
} 
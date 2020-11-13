export function hydrate(channel) {
	channel.url = `/channel/${channel.id}`
	for (const entry of channel.eucharistTimetable) {
		entry.location = channel.locations[entry.location]
	}
}
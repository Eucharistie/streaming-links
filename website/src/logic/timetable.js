export function createTimetable(channels) {
	const hours = new Map()
	const languages = new Set()
	
	for (const channel of channels) {
		const shortName = channel.shortName || channel.name
		for (const entry of channel.eucharistTimetable) {
			languages.add(entry.language)
			const summary = {
				title: shortName, // TODO add location name
				url: channel.url,
				language: entry.language,
				kind: entry.kind
			}
			if (entry.days) summary.days = entry.days
			if (entry.dates) summary.dates = entry.dates
			if (entry.excludingDates) summary.excludingDates = entry.excludingDates
			if (hours.has(entry.time))
				hours.get(entry.time).push(summary)
			else
				hours.set(entry.time, [summary])
		}
	}
	
	return {
		hours: Array
			.from( hours.entries() )
			.map( ([time, masses]) => ({time, masses}) )
			.sort( ({time: first}, {time: second}) => orderOf(first, second) )
			.map(({time, masses}) => ({time: time.split(':'), masses})),
		languages
	}	
}

export function matchesFilter(mass) {
	if (!this.languages.has(mass.language))
		return false
	if (mass.excludingDates) {
		for (const dateString of mass.excludingDates) {
			if (dateString == this.serializedDate) return false
		}
	}
	if (mass.days) {
		for (const day of mass.days)
			if (day == this.dayOfWeek) return true
		if (mass.dates)
			return isExactDate()
	} else {
		return isExactDate()
	}
	return false

	function isExactDate() {
		for (const dateString of mass.dates)
			if (dateString == this.serializedDate)
				return true
		return false
	}
}

function orderOf(first, second) {
	if (first == second)
		return 0
	else if (first < second)
		return -1
	else
		return 1
}

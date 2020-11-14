import {getAllChannels, cachedChannels} from '../../logic/server/channel cache'
import {createResponders} from '../../logic/server/channels http responses' 
import {createTimetable} from '../../logic/timetable'
import {inDevMode} from '../../logic/runtime'

const getTimeTable = inDevMode ?
	() => getAllChannels().then(serializeTimetable) :
	() => cachedChannels.then(serializeTimetable)

export function get(_, response) {
	const {sendResult, sendError} = createResponders(response)
	getTimeTable()
		.then(sendResult)
		.catch(sendError)
}

function serializeTimetable(channel) {
	const timetable = createTimetable(channel)
	timetable.languages = Array.from(timetable.languages)
	// TODO filter out old dates in fields 'excludingDates' and 'dates'
	return timetable
}
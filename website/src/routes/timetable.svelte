<script context="module">
	import {fetchChannels} from '../logic/channels'
	export const preload = fetchChannels
</script>

<script>
	import {hydrate} from '../logic/hydrate'
	import SidebarLayout from '../layouts/sidebar.svelte'
	import {Filter16, X16, Check16, ChevronLeft16, ChevronRight16} from 'svelte-octicons'

	import DatePicker from '../components/date picker.svelte'

	let timetable = {languages: [], hours: []}
	export let channels
	channels = channels.map(hydrate)
	let date = new Date()

	$: {
		timetable = timetableForChannels(channels, date)
	}

	function timetableForChannels(channels, date) {
		const hours = new Map()
		const languages = new Set()

		for (const channel of channels) {
			const shortName = channel.shortName || channel.name
			for (const entry of channel.eucharistTimetable) {
				languages.add(entry.language)
				const summary = {
					title: shortName, // TODO add location name
					url: channel.url,
					language: entry.language
				}
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
				.sort( ({time: first}, {time: second}) => orderOf(first, second) ),
			languages
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

	const datePickerOptions = {
		inline: true,
		mode: 'single'
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="/style/flatpickr.min.css">
</svelte:head>

<SidebarLayout>
	<div slot=sidebar>
		<nav class="SideNav mt-md-3 border-bottom border-md overflow-hidden rounded-0 rounded-md-2">
			<!-- Calendar component -->
				<div id="datePicker" class="hide-sm hide-md date-picker">
					<DatePicker options={datePickerOptions} bind:selection={date}></DatePicker>
				</div>
			<!-- End [Calendar component] -->
		</nav>
	</div>

	<div class="Box border-left-0 border-right-0 border-md rounded-0 rounded-md-2 overflow-hidden">

		<!-- timetable header -->
		<div class="Box-header order-0 border-md rounded-0 rounded-md-top-2 d-flex flex-justify-between Box-header--blue">
	
			<!-- filter button -->
			<details class="details-reset details-overlay m-0 mr-3">
				<summary class="btn btn-sm" aria-haspopup="true">
					<Filter16></Filter16>
					<span class="hide-sm ml-2">Filter</span>
				</summary>
				<div class="SelectMenu">
					<div class="SelectMenu-modal">
						<header class="SelectMenu-header">
							<h6 class="m-0 p-1 SelectMenu-title">Talen</h6>
							<button class="SelectMenu-closeButton" type="button" onclick="document.querySelector('#filter').open = false">
								<X16></X16>
							</button>
						</header>
						<div class="SelectMenu-list" id="languageFilter">
							{#each Array.from(timetable.languages) as language}
								<button class="SelectMenu-item" role="menuitem" aria-checked="true">
									<Check16 class="SelectMenu-icon SelectMenu-icon--check"></Check16>
									<span>{language}</span>
								</button>								
							{/each}
						</div>
					</div>
				</div>
			</details>
	
			<!-- mobile day chooser (for desktop: sidenav) -->
			<div class="BtnGroup hide-lg hide-xl m-0">
				<button class="btn btn-sm BtnGroup-item" type="button" aria-label="Chevron left icon">
					<ChevronLeft16></ChevronLeft16>
				</button>
				<button class="text-center btn btn-sm BtnGroup-item" style="width: 8em;">
					<!-- day of week comes here -->
				</button>
				<button class="btn btn-sm BtnGroup-item" type="button" aria-label="Chevron right icon">
					<ChevronRight16></ChevronRight16>
				</button>
			</div>
	
			<!-- Spacer -->
			<div class="hide-lg hide-xl"></div>
	
		</div> <!-- end timetable header -->
	
		<!-- time-of-day row -->
		{#each timetable.hours as entry}
			<div class="Box-row day-row">
				{entry.time}

				<!-- calendar event -->
				{#each entry.masses as mass}
					<a href={mass.url} class="capitalize-first-letter event Label Label--gray">
						{mass.title}
						<span class="Counter Counter--gray language-badge">
							{mass.language}
						</span>
					</a>
				{/each}
			</div>
		{/each}
	
		<div class="Box-footer day-footer text-small bg-gray">
			Legende:
			<span title="Uur" class="Label Label--gray">weekmis</span>
			<span title="Uur" class="Label Label--gray text-blue">zondagsmis</span>
			<span title="Uur" class="Label Label--gray text-red">feest</span>
		</div>
	
	</div>
</SidebarLayout>

<style>
	.date-picker {
		width: 307.875px;
		min-height: 100px;
	}
</style>
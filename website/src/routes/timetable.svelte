<script context="module">
	export async function preload(page, session) {
		const response = await this.fetch(`/api/timetable.json`);
		if (!response.ok) throw new Error(await response.text())
		const timetable = await response.json();

		return {timetable}
	}
</script>

<script>
	import SidebarLayout from '../layouts/sidebar.svelte'
	import {Filter16, X16, Check16, ChevronLeft16, ChevronRight16} from 'svelte-octicons'

	import DatePicker from '../components/date picker.svelte'
	import { matchesFilter } from '../logic/timetable'

	export let timetable
	let date = new Date()
	let selectedLanguages = new Set(timetable.languages)

	const datePickerOptions = {
		inline: true,
		mode: 'single'
	}

	function toggleLanguage(language) {
		if (selectedLanguages.has(language))
			selectedLanguages.delete(language)
		else
			selectedLanguages.add(language)
		selectedLanguages = selectedLanguages
	}

	let filteredHours = [];
	$: {
		const serializedDate = `${date.getFullYear()}-${("00" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`
		const dayOfWeek = date.getDay()
		filteredHours = timetable
			.hours
			.map(({time, masses}) => ({time, masses: masses.filter(matchesFilter, {languages: selectedLanguages, serializedDate, dayOfWeek})}))
			.filter(({masses}) => masses.length > 0)
	}

	function massClass(kind) {
		if (kind == 'sunday') return 'text-blue'
		else if (kind == 'feast') return 'text-red'
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
								<button class="SelectMenu-item" role="menuitem" aria-checked={selectedLanguages.has(language)} on:click={e => toggleLanguage(language, e)}>
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
		{#each filteredHours as entry}
			<div class="Box-row day-row">
				{entry.time[0]}:{entry.time[1]}

				<!-- calendar event -->
				{#each entry.masses as mass}
					<a href={mass.url} class="capitalize-first-letter event Label Label--gray {massClass(mass.kind)}">
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
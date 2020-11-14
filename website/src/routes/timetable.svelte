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
	import {ChevronLeft16, ChevronRight16, Filter16} from 'svelte-octicons'
	
	import Filter from '../components/timetable/filter.svelte'
	import DatePicker from '../components/date picker.svelte'
	import { filterTimetable } from '../logic/timetable'

	// will be filled with result of '/api/timetable.json'
	export let timetable

	// Filter properties:
	let date = new Date()
	let selectedLanguages = new Set(timetable.languages)

	// Dynamically filter masses based on `date` & `selectedLanguages`
	let filteredHours = [];
	$: filteredHours = filterTimetable(timetable, date, selectedLanguages)

	// --- Helpers ---
	function massClass(kind) {
		if (kind == 'sunday') return 'text-blue'
		else if (kind == 'feast') return 'text-red'
	}

	const datePickerOptions = {
		inline: true,
		mode: 'single'
	}
</script>

<SidebarLayout>
	<div slot=sidebar>
		<nav class="SideNav mt-md-3 ml-md-3 border-bottom border-md overflow-hidden rounded-0 rounded-md-2">
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
	
			<Filter
				allLanguages={timetable.languages}
				bind:selectedLanguages={selectedLanguages} >
			</Filter>
	
			<!-- mobile day chooser (for desktop: sidenav) -->
			<div class="BtnGroup hide-lg hide-xl m-0">
				<button class="btn btn-sm BtnGroup-item" type="button" aria-label="Chevron left icon">
					<ChevronLeft16></ChevronLeft16>
				</button>
				<DatePicker className="text-center btn btn-sm BtnGroup-item" bind:selection={date}></DatePicker>
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
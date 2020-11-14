<script>
	import {Filter16, X16, Check16} from 'svelte-octicons'

	export let allLanguages = new Set()
	export let selectedLanguages = new Set()

	let isOpen = false;

	function toggleLanguage(language) {
		if (selectedLanguages.has(language))
			selectedLanguages.delete(language)
		else
			selectedLanguages.add(language)
		selectedLanguages = selectedLanguages
	}
</script>

<details bind:open={isOpen} class="details-reset details-overlay m-0 mr-3">
	<summary class="btn btn-sm" aria-haspopup="true">
		<Filter16></Filter16>
		<span class="hide-sm ml-2">Filter</span>
	</summary>
	<div class="SelectMenu">
		<div class="SelectMenu-modal">
			<header class="SelectMenu-header">
				<h6 class="m-0 p-1 SelectMenu-title">Talen</h6>
				<button class="SelectMenu-closeButton" type="button" on:click={e => isOpen=false}>
					<X16></X16>
				</button>
			</header>
			<div class="SelectMenu-list" id="languageFilter">
				{#each Array.from(allLanguages) as language}
					<button class="SelectMenu-item" role="menuitem" aria-checked={selectedLanguages.has(language)} on:click={e => toggleLanguage(language, e)}>
						<Check16 class="SelectMenu-icon SelectMenu-icon--check"></Check16>
						<span>{language}</span>
					</button>								
				{/each}
			</div>
		</div>
	</div>
</details>

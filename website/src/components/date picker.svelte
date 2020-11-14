<script>
	import Flatpickr from "flatpickr"
	import {onMount} from 'svelte'
	import {Dutch} from 'flatpickr/dist/l10n/nl'

	let input;
	let flatpickr = {setDate(){}};
	export let options = {};
	export let selection;
	export let className = '';

	onMount(instantiateFlatpickr)

	function instantiateFlatpickr() {
		console.log(input)
		flatpickr = Flatpickr(input, {
			locale: Dutch,
			onChange(dates) {
				if (dates.length > 0)
					selection = dates[0]
			},
			mode: 'single',
			...options
		})
		return flatpickr.destroy
	}

	$: flatpickr.setDate(selection)
</script>

<svelte:head>
	<link rel="stylesheet" href="/style/flatpickr.min.css">
</svelte:head>

{#if options.inline}
	<div bind:this={input}></div>
{:else}
	<input type=date class={className} bind:this={input} value="2020-10-01">
{/if}
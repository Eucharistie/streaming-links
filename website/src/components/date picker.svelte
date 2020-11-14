<script>
	import {onMount} from 'svelte'
	import Flatpickr from "flatpickr"
	import {Dutch} from 'flatpickr/dist/l10n/nl'

	let input;
	let flatpickr = {setDate(){}};
	export let options;
	export let selection;

	onMount(instantiateFlatpickr)

	function instantiateFlatpickr() {
		flatpickr = Flatpickr(input, {
			locale: Dutch,
			onChange([date]) {
				selection = date
			},
			mode: 'singe',
			...options
		})
		return flatpickr.destroy
	}

	$: flatpickr.setDate(selection)
</script>

<div bind:this={input}></div>
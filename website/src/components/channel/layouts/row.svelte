<script>
	import Icons from '../elements/icons.svelte'
	import Timelist from '../elements/time list.svelte'
	import Live from '../elements/live.svelte'
	
	export let channel;
</script>

<div class="d-flex flex-row flex-items-start">
	<Icons {channel}></Icons>
	
	<div class="flex-auto pt-0 pt-md-1">
		{#if channel.isLive}
			<Live></Live>
		{/if}

		<strong>
			<a href="{channel.url}" class="capitalize-first-letter">{channel.name}</a>
		</strong>

		{#if channel.description}
			<p class="text-small text-gray-light">{channel.description}</p>
		{/if}

		<Timelist {channel}></Timelist>
	</div>
</div>
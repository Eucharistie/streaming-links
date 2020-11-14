<script context="module">
	import {fetchChannels} from '../logic/channels'
	export const preload = fetchChannels
</script>

<script>
	import SidebarLayout from '../layouts/sidebar.svelte'
	import ChannelRow from '../components/channel/compositions/row.svelte'
	import {hydrate} from '../logic/hydrate'

	export let channels
	channels = channels.map(hydrate)
</script>

<SidebarLayout>
	<div class="Box border-0 border-md rounded-0 rounded-md-2">
		<div class="Box-header text-small">
			Kanalen die de eucharistie uitzenden
		</div>
	
		{#each channels as channel}
			<div class="Box-row">
					<ChannelRow {channel}></ChannelRow>
			</div>
		{/each}
	</div>	
</SidebarLayout>
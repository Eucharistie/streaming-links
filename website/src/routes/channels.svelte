<script context="module">
	export async function preload(page, session) {
		const response = await this.fetch(`/api/channels.json`);
		if (!response.ok) throw new Error(await response.text())
		const channels = await response.json();

		return {channels}
	}
</script>

<script>
	import SidebarLayout from '../layouts/sidebar.svelte'
	import ChannelRow from '../components/channel/layouts/row.svelte'
	import {hydrate} from '../logic/channels'

	export let channels
	channels.forEach(hydrate)
	
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
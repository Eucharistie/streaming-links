<script>
	import SidebarLayout from '../layouts/sidebar.svelte'
	import ChannelRow from '../components/channel/layouts/row.svelte'

	const exampleChannels = [
		{name: "Basiliek", description: 'Audio streaming', url: '/channel/basiliek', isLive: true},
		{name: "Kathedraal", url: '/channel/kathedraal'}
	]
</script>

<SidebarLayout>
	<div class="Box border-0 border-md rounded-0 rounded-md-2">
		<div class="Box-header text-small">
			Kanalen die de eucharistie uitzenden
		</div>
	
		{#each exampleChannels as channel}
			<div class="Box-row">
					<ChannelRow {channel}></ChannelRow>
			</div>
		{/each}
	</div>	
</SidebarLayout>
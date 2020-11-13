<script context="module">
	export async function preload(page, session) {
		// the `id` parameter is available because this file
		// is called [id].svelte
		const { id } = page.params;

		const response = await this.fetch(`/api/channel/${id}.json`);
		const channel = await response.json()

		

		return { channel };
	}
</script>

<script>
	import SidebarLayout from '../../layouts/sidebar.svelte'
	import Icons from '../../components/channel/elements/icons.svelte'
	import Timelist from '../../components/channel/elements/time list.svelte'
	import Live from '../../components/channel/elements/live.svelte'
	import {Book16} from 'svelte-octicons'

	export let channel;
</script>

<SidebarLayout>
	<div class="d-block p-0 position-relative border-md rounded-md-2 overflow-hidden no-underline bg-white" href="#">
		<div class="bg-blue position-absolute top-0 left-0 py-1 width-full hide-sm hide-md"></div>
	
		<div class="my-4 mx-3">
			<div class="d-flex flex-row flex-items-start">
				<Icons {channel}></Icons>
				
				<div class="flex-auto pt-0 pt-md-1">			
					<h3 class="text-gray-dark mt-0">
						{#if channel.isLive}
							<Live></Live>
						{/if}

						{channel.name}
					</h3>
		
					{#if channel.description}
						<p class="text-small text-gray-light">{channel.description}</p>
					{/if}
		
					<h6 class="mb-0 mt-2 hide-sm">
						Info
					</h6>
		
					{#if channel.community }
						<!-- TODO add community in schema-->
						<p class="f5 mb-0 indent-after-wrap">
							<span class="d-block d-sm-inline text-gray position-md-absolute">
								Gemeenschap
							</span>
							<span class="pl-md-11">{channel.community}</span>
						</p>
					{/if}
		
					{#if channel.priests.length > 0}
						<p class="f5 mb-0 indent-after-wrap">
							<span class="d-block d-sm-inline text-gray position-md-absolute">
								Priester{#if channel.priests.length > 1}s{/if}
							</span>
							<span class="pl-md-11">
								{ channel.priests.join(', ') }
							</span>
						</p>
					{/if}
		
					{#if channel.locations.length > 0}
						<p class="f5 mb-0 indent-after-wrap">
							<span class="d-block d-sm-inline text-gray position-md-absolute">
								Locatie{#if channel.locations.length > 1}s{/if}
							</span>
							<span class="pl-md-11">
								<!-- TODO: add diocese -->
								{ channel.locations.map(location => location.city).join(', ') }
							</span>
						</p>
					{/if}
		
					<Timelist {channel}></Timelist>
		
					<!-- TODO: use optional chaining with typescript -->
					{#if channel.youtube && channel.youtube.channelID }
						<a href="https://lectionary.netlify.com/custom-player.html?ytChannel={channel.youtube.channelID}" class="btn mt-4">
							<Book16></Book16> Lezingen van de dag
						</a>
					{/if}
					
				</div>
			</div>
		</div>
	
		<!--{% if page.youtubeChannelID %}
		<div class="videowrapper mb-md-3">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel={{page.youtubeChannelID}}&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
		<div class="bg-gray-dark position-absolute bottom-0 left-0 py-2 width-full hide-sm hide-md"></div>
		{% endif %} -->
	</div>	
</SidebarLayout>
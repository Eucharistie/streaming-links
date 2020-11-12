<script>
	import SidebarLayout from '../layouts/sidebar.svelte'
	import ChannelRow from '../components/channel/row.svelte'
</script>

<SidebarLayout>
	<div class="Box border-0 border-md rounded-0 rounded-md-2">
		<div class="Box-header text-small">
			Kanalen die de eucharistie uitzenden
		</div>
	
		<!-- {% for stream in site.kanalen %}
			{% assign timetable = stream.timetable %}
			{% if timetable %} -->
	
				<div class="Box-row">
					<ChannelRow channel={{}}></ChannelRow>
				</div>
			<!-- {% endif %}
		{% endfor %} -->
	
	</div>	
</SidebarLayout>
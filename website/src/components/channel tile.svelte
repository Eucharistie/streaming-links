<script>
	import Avatar from './avatar.svelte'
	export let day, time, channel;

	const title = (channel.shortName || channel.name || 'Onbekend') // TODO add priest and location as fallback
</script>

<div class="home-link col-12 col-sm-6 col-md-4 col-lg-3 float-left text-center" data-day="{day.value}" data-time="{time}">
	<div class="bg-white rounded-md-2 my-md-6 mx-md-3 p-4">
		<h6 class="m-0">
			{day.nl} om {time}u
		</h6>
		<a href="/{ channel.url }">
			<h4 class="css-truncate css-truncate-overflow mt-2">
				{title}
			</h4>
		</a>
		<a href="/{ channel.url }">
			<Avatar {channel} maxsize="140px"></Avatar>
		</a>
	</div>
</div>
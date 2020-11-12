<script>
	import Avatar from './avatar.svelte'

	export let channel;
</script>

<div class="d-flex flex-column flex-md-row flex-md-items-start flex-items-center">
	<a href="{ channel.url }" class="mr-3 text-gray">
		<Avatar {channel} maxsize="80px"></Avatar>
	</a>
	
	<div style="max-width: 80px;" class="mt-2 mt-md-0 mr-3 social d-flex flex-row flex-md-column flex-order-1 flex-md-order-none flex-wrap flex-justify-center">
		<!-- {% if include.channel.facebook %} -->
		<a href="{ channel.facebook }" style="text-decoration: none;">
			<i class="fab fa-facebook fa-fw fa-2x"></i>
		</a>
		<!-- {% endif %} -->
		<!-- {% if include.channel.twitter %} -->
		<a href="{ channel.twitter }" style="text-decoration: none;">
			<i class="fab fa-twitter fa-fw fa-2x"></i>
		</a>
		<!-- {% endif %} -->
		<!-- {% if include.channel.youtube %} -->
		<a href="{ channel.youtube }" style="text-decoration: none;">
			<i class="fab fa-youtube fa-fw fa-2x"></i>
		</a>
		<!-- {% endif %} -->
		<!-- {% if include.channel.homepage %} -->
		<a href="{ channel.homepage }" style="text-decoration: none;">
			<i class="fas fa-link fa-fw fa-2x"></i>
		</a>
		<!-- {% endif %} -->
	</div>
</div>
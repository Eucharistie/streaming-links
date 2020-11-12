<script>
	export let channel;
	export let maxsize = '100px';
</script>

{#if channel.fbid }
  <img
    class="avatar circle"
    src="https://graph.facebook.com/v6.0/{ channel.fbid }/picture?type=large"
    alt="{channel.name | channel.shortName}"
    style="max-width:{maxsize}; max-height:{maxsize};">
{:else}
  <svg
    viewBox="0 0 120 120"
    class="logo avatar"
    style="width:{maxsize};">
    <use xlink:href="#logoCircle" class="blue"/>
    <use xlink:href="#logoShape" class="white"/>
  </svg>
{/if}

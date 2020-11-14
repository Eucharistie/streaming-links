<script>
  export let url = false;
  export let name = 'Kanaalafbeelding'
	export let maxsize = '100px';
</script>

{#if url}
  <img
    class="avatar circle"
    src={ url }
    alt="{name}"
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

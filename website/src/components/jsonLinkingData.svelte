<script>
	export let data;

	const jsonLD = JSON.stringify(data)
</script>

{@html `<script type="application/ld+json">${jsonLD}</script>`}

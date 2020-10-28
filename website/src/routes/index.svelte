<script context="module">
	export async function preload() {
		return { cool: process.cwd() }
	}
</script>

<script>
	export let cool;
</script>

<svelte:head>
	<title>Echaristie.info</title>
</svelte:head>

<main>
	<h1>Hello world</h1>
	<pre>{cool}</pre>
</main>
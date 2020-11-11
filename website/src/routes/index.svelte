<script context="module">
	export async function preload() {
		return { cool: process.cwd() }
	}
</script>

<script>
	export let cool;
</script>

<svelte:head>
	<title>Eucharistie-info | Enkele links om de Eucharistie live te volgen.</title>
</svelte:head>

<main>
	<h1>Hello world</h1>
	<pre>{cool}</pre>
</main>
<script context="module">
	export async function preload(page, session) {
		const data = await this.fetch('api/info.json');
		const info = await data.json()

		return { site: info }
	}
</script>

<script>
	import Logo from '../components/logo.svelte'
	import JsonLink from '../components/jsonLD.svelte'

	export let site;
	site.imageURL = site.url + site.image

	const linkingData = {
		'@type': "WebSite",
		'@context': "https://schema.org",
		name: site.title,
		headline: site.title,
		description: site.description,
		image: site.imageURL,
		url: site.url,
		logo: site.url + '/image/logo/main.png'
	}
	
	export let segment;
	
	function linkClass(link) {
		return segment == link ? '' : 'text-normal'
	}
</script>

<svelte:head>
<meta property="og:locale" content="nl_BE">
<meta property="og:site_name" content="{site.title}">
<meta property="og:image" content="{site.imageURL}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@eucharistieinfo">
<meta name="twitter:image" content="{site.imageURL}">
<meta property="og:description" content="{site.description}">
<meta name="twitter:description" content="{site.description}">
<meta property="og:title" content="{site.title}">
<meta property="og:url" content="{site.url}">
<meta name="twitter:title" content="{site.title}">
<JsonLink data={linkingData}></JsonLink>

</svelte:head>

<Logo></Logo>

<div class="markdown-body">
	<!-- TODO Figure out what this is for -->
	<!-- {% if site.title and site.title != page.title %} -->
	
	<div class="bg-blue">
		<div class="container-lg clearfix Header bg-blue">
			<div class="Header-item Header-item--full">
				<a href="/" class="Header-link f4 d-flex flex-items-center">
					<svg viewBox="0 0 120 120" height="32" width="32" class="mr-2 logo">
						<use xlink:href="#logoCircle" class="white"/>
						<use xlink:href="#logoShape" class="blue"/>
					</svg>
					<span>{ site.title }</span>
				</a>
			</div>
			<div class="Header-item hide-sm">
				<a href="/timetable" class="Header-link {linkClass('timetable', segment)}">Uurrooster</a>
			</div>
			<div class="Header-item hide-sm">
				<a href="/channels" class="Header-link {linkClass('channels', segment)}">Kanalen</a>
			</div>
			<div class="Header-item hide-sm">
				<a href="/texts" class="Header-link {linkClass('texts', segment)}">Missaal</a>
			</div>
			<div class="Header-item hide-sm">
				<a href="/about" class="Header-link {linkClass('about', segment)}">Over</a>
			</div>
			<a href="#nav" onclick="toggleNav()" id="sandwich" class="Header-item mr-0 text-white d-sm-none">
				<!-- {% octicon three-bars height:32 %} -->
			</a>
		</div>
	</div>
	
	<!-- {% endif %} -->
	<slot></slot>
	
	<!-- Todo include script.html -->
	
</div>
<div class="bg-gray">
	<div class="container-lg clearfix p-3 mt-3 d-flex flex-justify-end">
		<a href="https://www.twitter.com/eucharistieinfo" class="social flex-md-order-1">
			<i class="link-gray fab fa-twitter fa-fw fa-2x"></i>
		</a>
		<a href="https://www.facebook.com/eucharistie.info" class="social flex-md-order-2">
			<i class="link-gray fab fa-facebook fa-fw fa-2x"></i>
		</a>
		<a href="mailto:contact@eucharistie.info" class="flex-auto text-md-right mt-1 pl-2 pl-md-0 pr-md-2 link-gray">
			contact@eucharistie.info
		</a>
	</div>
</div>


<style lang="scss" global>
	@import "./style/global.scss";
</style>
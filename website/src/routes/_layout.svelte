<script>
    const site = {
        title: 'Eucharistie-info Vlaanderen',
        description: 'Eucharistie live volgen op internet. Uurrooster, teksten en links.',
        url: 'https://www.eucharistie.info',
        logo: '/assets/img/logo-social.png',
    }

    export let segment;

    function linkClass(link) {
        if (segment != link)
            return 'text-normal'
    }
</script>

<svelte:head>
    <meta property="og:locale" content="nl_BE">
    <meta property="og:site_name" content="{site.title}">
    <meta property="og:image" content="{site.url}{site.logo}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@eucharistieinfo">
    <meta name="twitter:image" content="{site.url}{site.logo}">
    <meta property="og:description" content="{site.description}">
    <meta name="twitter:description" content="{site.description}">
    <meta property="og:title" content="{site.title}">
    <meta property="og:url" content="{site.url}">
    <meta name="twitter:title" content="{site.title}">
    <!-- TODO -->
    <!-- <script type="application/ld+json">
        {
        "headline":"{{site.title}}",
        "image":"{{site.url}}{{site.baseurl}}{{page.image}}",
        "url":"{{site.url}}{{site.baseurl}}",
        "name":"{{site.title}}",
        "description":"{{site.description}}",
        "@type":"WebSite",
        "@context":"https://schema.org",
        "logo": "{{site.url}}{{site.baseurl}}/assets/img/logo.png"
        }
    </script> -->
</svelte:head>

<div hidden>
    <!-- TODO -->
    <!-- {% include logo.svg %} -->
</div>
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
        <a href="uurrooster/" class="Header-link {linkClass('timetable')}">Uurrooster</a>
        </div>
        <div class="Header-item hide-sm">
        <a href="kanalen/" class="Header-link {linkClass('channels')}">Kanalen</a>
        </div>
        <div class="Header-item hide-sm">
        <a href="missaal/" class="Header-link {linkClass('texts')}">Missaal</a>
        </div>
        <div class="Header-item hide-sm">
        <a href="over/" class="Header-link {linkClass('about')}">Over</a>
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
<svelte:head>
	<title>Eucharistie-info | Enkele links om de Eucharistie live te volgen.</title>
</svelte:head>

<script>
	import ChannelTile from '../components/channel/layouts/tile.svelte'
</script>

<div class="blockquote-wrapper">
  <div class="blockquote">
    <h1>
      In deze pandemische situatie, worden we uitgenodigd om
      <span style="color:#ffffff">de waarde van de communio te
      herontdekken</span> en te verdiepen.
    </h1>
    <h4>&mdash;Paus Franciscus<br><em>Angelus, 15 Maart</em></h4>
  </div>
</div>
<div class="container-lg clearfix limit-children">

  <div class="col-12 col-sm-6 col-md-4 col-lg-3 float-left text-center">
    <a href="/timetable">
      <div class="bg-blue rounded-md-2 my-md-6 mx-md-3 p-4">
        <h6 class="m-0 text-white">
          Volg de eucharistie live:
        </h6>
        <h4 class="text-white mt-2">
          Uurrooster
        </h4>
        <svg viewBox="0 0 120 120" class="logo avatar" style="width:140px;">
          <use xlink:href="#logoCircle" class="white"/>
          <use xlink:href="#logoShape" class="blue"/>
        </svg>
      </div>
    </a>
  </div>

	<!-- TODO loop over the channels -->
	<ChannelTile channel={{name: 'Hello world'}} day={{nl: 'zondag'}} time="8:15"></ChannelTile>
</div>

<script>
	const longDaysInDutch = {
		mon: 'maandag',
		tue: 'dinsdag',
		sun: 'zondag'
	}
	
	const shortDaysInDutch = {
		mon: 'ma',
		tue: 'di',
		sun: 'zo'
	}
	
	const time = '11:00'
	const days = ['mon', 'tue', 'sun']
	const language = 'nl'
	
	const long  = day => longDaysInDutch[day]
	const short = day => shortDaysInDutch[day]
</script>

<!-- {% for language in languages %} -->
	<!-- {% if sundayMasses.size > 0 %} -->
		<h6 class="mb-0 mt-2">
			Zondagsmis
			<span title="Label: gray label" class="Label Label--gray">
				{language}
			</span>
		</h6>
	<!-- {% endif %} -->

	<!-- {% for time in sundayMasses %} -->
		<!-- {% if language == time.language %} -->
			<p class="f5 lh-condensed mb-0 indent-after-wrap">
				<span class="text-gray position-md-absolute">{time}</span>
				<span class="pl-md-7 hide-sm">{days.map(long).join(', ')}</span>
				<span class="pl-md-7 hide-md hide-lg hide-xl">{days.map(short).join(', ')}</span>
			</p>
		<!-- {% endif %} -->
	<!-- {% endfor %} -->

	<!-- {% if weekMasses.size > 0 %} -->
		<h6 class="mb-0 mt-2">
			Weekmis
			<span title="Label: gray label" class="Label Label--gray">
				{language}
			</span>
		</h6>
	<!-- {% endif %} -->

	<!-- {% for time in weekMasses %} -->
		<!-- {% if language == time.language %} -->
			<p class="f5 lh-condensed mb-0 indent-after-wrap">
				<span class="text-gray position-md-absolute">{time}</span>
				<span class="pl-md-7 hide-sm">{ long('tue') }</span>
				<span class="pl-md-7 hide-md hide-lg hide-xl">{ short('tue') }</span>
			</p>
		<!-- {% endif %} -->
	<!-- {% endfor %} -->
<!-- {% endfor %} -->

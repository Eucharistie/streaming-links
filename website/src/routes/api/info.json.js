const { PORT, NODE_ENV } = process.env;

const inDevMode = NODE_ENV === 'development'

const info = {
	title: 'Eucharistie-info',
	description: 'Eucharistie live volgen op internet. Uurrooster, teksten en links.',
	remoteWebsiteURL: 'https://www.eucharistie.info',
	image: '/image/logo/social.png'
}

info.url = inDevMode ? `http://localhost:${PORT}` : info.remoteWebsiteURL

export function get(request, response) {

	response.setHeader('Content-Type', 'application/json')
	response.end(JSON.stringify(info))
}
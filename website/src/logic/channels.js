export async function fetchChannels(page, session) {
	const response = await this.fetch(`/api/channels.json`);
	if (!response.ok) throw new Error(await response.text())
	const channels = await response.json();

	return {channels}
}
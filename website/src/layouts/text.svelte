<script>
	import TextContainer from '../components/text container.svelte'
	import SidebarLayout from './sidebar.svelte'
</script>

<SidebarLayout>
	<TextContainer>
		<slot></slot>
	</TextContainer>
</SidebarLayout>
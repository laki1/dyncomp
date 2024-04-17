<script>
	export let type = 'div'
	
	let content
	
	function uplift(node) {
		return {
			update({type, content}) {
				const el = document.createElement(`${type}`)
				el.appendChild(content)
				node.appendChild(el)
			}
		}
	}
</script>

<div use:uplift={{ content, type}}>
	<div bind:this={content}>
		<slot></slot>
	</div>
</div>

<style>
	div {
		display: contents;
	}
</style>
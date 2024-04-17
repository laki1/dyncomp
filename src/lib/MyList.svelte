<script>
	import MyListItem from "./MyListItem.svelte";

	export let title = "";
	export let items = [];
</script>

<div>Seznam <strong>{title}</strong>
	<ul>
		{#each items as {title, props}, indx}
			<svelte:component this={MyListItem} {...props}>
				{indx+1}: {title}
			</svelte:component>
		{/each}
	</ul>
</div>

<style>
</style>
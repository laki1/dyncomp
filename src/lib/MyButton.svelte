<svelte:options accessors />
<script>
	export let text = "n/a";
	export let type;
</script>

<div>
	<button {type}>{text}</button>
</div>

<style>
	div {
		padding: 8px;
		border: 1px solid red;
	}
</style>
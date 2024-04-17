<script>
	export let title = "";
</script>

<li  {...$$restProps}><slot></slot></li>

<style>
	li {
		background-color: silver;
		padding: 4px 8px 4px 8px;
		font-weight: bold;
	}
</style>
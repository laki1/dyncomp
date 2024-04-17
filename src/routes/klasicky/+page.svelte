<script>
	import DynamicElements from '$lib/DynamicElements.svelte';

	export let data;

</script>

<section>
	<h1>Klasicky</h1>
</section>

{#await data.config.promise }
	<div>Načítání konfigurace...</div>	
{:then cfg }
	{#each cfg as cmp}
		{#if (cmp.type === "header")}
			<DynamicElements type={cmp.variant} class={cmp.cls}>{cmp.text}</DynamicElements>
		{:else if (cmp.type === "button")}
			<button class={cmp.cls}>{cmp.title}</button>
		{:else if (cmp.type === "list")}
			<ul>
			{#each cmp.content as item, i}
				<li><span>{i}</span>&nbsp;{item.title}</li>
			{/each}
		</ul>
		{/if}	
	{/each}

	<pre>{JSON.stringify(cfg, undefined, 4)}</pre>
{/await}

<style>
	.primary {
		background-color: greenyellow;
	}
	.secondary {
		background-color: orange;
	}
</style>

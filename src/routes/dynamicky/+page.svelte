<script>
	import { enhance } from '$app/forms';
	import MyButton from '$lib/MyButton.svelte';
	import MyList from '$lib/MyList.svelte'; 

	export let data;
	export let form;
	let mojetlacitko;
	let AnyComponent;
	let list;

	data?.config.promise?.then(_start);

	$: _form(form);

	async function _start(loadedData) {
		if (loadedData.updated) {			
			mojetlacitko = loadedData.updated;
		}
	}

	async function _form(loadedData) {
		let c;
		if (loadedData?.config) {
			c = loadedData.config;
			if (c.updated) {			
				mojetlacitko = c.updated;
			}

			if (c.toComplete) {
				xyz(undefined, { id: c.toComplete.id, text: c.toComplete.text });
			}

			if (c.addList) {
				list = c.addList;
			}

			if (c.addAnyComponent) {
				import(`../../lib/${c.addAnyComponent.name}.svelte`).then(function(res) {
					AnyComponent = res.default;
					//pridat na urcite misto neznamou komponentu vcetne properties
					const el = new AnyComponent(
						{ target: document.querySelector('#any'), props: c.addAnyComponent?.props }
					);
				});
			}
		}
	}
	
	function xyz(e, data) {
		//dynamicky vlozeni
		const el = new MyButton(
			{ target: document.querySelector('#'+(data?.id ? data?.id : e.id)), props: { 
				text: (data?.text ? data?.text : e.getAttribute("text")) 
			} }
		);
	}
</script>

<section>
	<h1>Dymanicky</h1>
</section>

<form method="POST" use:enhance>
	<MyButton text={mojetlacitko} type="submit"></MyButton>
</form>

<!-- fixne renderovani jeste pred inicializaci a dokoncenim -->
<div id="xyz" use:xyz text="Tohle je dynamicky doplnene pri initu..."></div>
<div id="xyz2"><!-- po dokonceni se sem doplni obsah--></div>
<div>
	<svelte:component this="{AnyComponent}" />
</div>

<!-- dynamicky renderovane po ziskani prvotni konfigurace -->
{#await data.config.promise }
	<div>Načítání konfigurace...</div>	
{:then cfg }
	<section id="any"></section>	
	<section>
		{#if list}
			<svelte:component this={MyList} {...list} />
		{/if}
	</section>
	<br />
	<br />
	<div>Data pro pocatecni konfiguraci:</div>
	<pre>{JSON.stringify(cfg, undefined, 4)}</pre>
{/await}
<br />
<br />
<div>Data ziskana pro dokonceni:</div>
<pre>{JSON.stringify(form, undefined, 4)}</pre>

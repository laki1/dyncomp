export const load = async () => {	
	
    async function getConfig() {        
		let data = [            
            { type: "header", variant: "h2", text: "Ovoce" },
            { type: "list", content: [
                { type: "listitem", title: "Banán" },
                { type: "listitem", title: "Hruška" },
                { type: "listitem", title: "Pomeranč" }
            ] },
            { type: "button", title: "Potvrď výběr", cls: "primary" }
        ];

         //schvalne zdrzujeme kvuli demo aplikaci
		await new Promise(r => setTimeout(r, 1250));

		return data;
	}
	
	return {
		config: { promise: getConfig() }
	}	
};

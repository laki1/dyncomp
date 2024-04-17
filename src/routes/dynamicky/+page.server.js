export const load = async () => {	
	
    async function getConfig() {        
		let data = {            
            updated: "klikni na to, at se neco stane"
        };
		return data;
	}
	
	return {
		config: { promise: getConfig() }
	}	
};

export const actions = {
	default: async (event) => {

        async function getUpdatedConfig() {        
            let data = {
                toComplete: { id: "xyz2", text: "...a dynamicky se to koncilo!" },
                updated: "...hotovo...",
                addAnyComponent: { name: "Abc", props: {style: "color: blue"} },
                addList: { title: "titulek seznamu", items: [
                    { title: "Banán", props: { style: "color: yellow" } },
                    { title: "Jablko", props: { style: "color: greenyellow" } },
                    { title: "Pomeranč", props: { style: "color: orange" } }
                ] }
            };
            return data;
        }

        return {
            config: await getUpdatedConfig()
        }
    }
};
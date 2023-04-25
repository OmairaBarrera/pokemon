let wsModulo = {

    async dataFech (url){
        const resuls = fetch(url);
        let response = await resuls
        let data = await response.json()
        return data
    },
    
    async pokemons(data){
        let pokemons = await this.dataFech(data);
        let poken = await Promise.all(pokemons.results.map( async(e) => {
            return await this.dataFech(e.url);
        }))
        return this.pokenDibujar(poken);
    },
    async botones(data){
        let pokemons = await this.dataFech(data);
        let botones = `
            <button><a href="${pokemons.previous}">previo</a></button>
            <button><a href="${pokemons.next}">previo</a></button>
        `
        return botones;
    },
    async pokenDibujar(data){
        let plantilla = "";
        data.forEach((val,id)=>{
            plantilla += `
                <div class="pockemon1">
                    <h1>#${val.id}</h1>
                    <img src="${val.sprites.other.home.front_default}" alt="">
                    <h2>${val.name}</h2>
                </div>`
        });
        
        return plantilla;
    }
}

self.addEventListener("message", async(e)=>{
    postMessage(await wsModulo[`${e.data.module}`](e.data.data));
})
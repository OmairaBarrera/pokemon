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
        let previo = pokemons.previous ? `<a class="btn btn-primary stretched-link m-3" href="${pokemons.previous}"> < </a>`: "";
        let next = pokemons.next ? `<a class="btn btn-primary stretched-link m-3" href="${pokemons.next}"> > </a>` : "";
        
        let botones = previo + next;
        return botones;
    },
    async pokenDibujar(data){
        let plantilla = "";
        data.forEach((val,id)=>{
            plantilla += `
                <div class="card d-flex align-items-center m-3 " style="width: 18rem;">
                    <p class="card-text">#${val.id}</p>
                    <img src="${val.sprites.other.home.front_default}" class="card-img-top" style="width: 15rem" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${val.name}</h5>
                    </div>
                </div>`
        });
        
        return plantilla;
    }
}

self.addEventListener("message", async(e)=>{
    postMessage(await wsModulo[`${e.data.module}`](e.data.data));
})
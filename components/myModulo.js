export default{
    data: 'https://pokeapi.co/api/v2/pokemon',

    async dataFech (url){
        const resuls = fetch(url);
        let response = await resuls
        let data = await response.json()
        return data
    },
    
    async pokemons(){
        let pokemons = await this.dataFech(this.data);
        console.log(await pokemons)  
        let poken = await Promise.all(pokemons.results.map( async(e) => {
            return await this.dataFech(e.url);
        }))
        this.pokenDibujar(poken);
    },

    async pokenDibujar(data){
        data.forEach((val,id)=>{
            document.querySelector('main').insertAdjacentHTML("beforeend",`
                <div class="pockemon1">
                    <img src="${val.sprites.other.home.front_default}" alt="">
                    <h2>${val.name}</h2>
                </div>
            `)
        })
    }
}
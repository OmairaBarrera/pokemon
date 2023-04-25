export default{
    data: 'https://pokeapi.co/api/v2/pokemon',
    pokemon(){
        const ws = new Worker("storage/wsModulo.js", {type:"module"}); 
        let count = 0;
        ws.postMessage({module:"pokemons", data: this.data});
        ws.postMessage({module:"botones", data: this.data});
        let id = [".botones", "#pokemons"]
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate(): undefined;
            count++;
        });
    }
}
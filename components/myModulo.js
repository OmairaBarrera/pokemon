export default{
    pokemon(){
        const ws = new Worker("storage/wsModulo.js", {type:"module"});
        ws.postMessage({module:"pokemons"});
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("main").append(...doc.body.children);
            ws.terminate();
        });
    }
}
function getPockemon(id, done){
    const resuls = fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    resuls
        .then(response => response.json())
        .then(data => done(data))
}

function pokemons(num){
    for(let i=1; i<=num; i++){
        getPockemon(i, data =>{
            document.querySelector('main').insertAdjacentHTML("beforeend",`
                <div class="pockemon1">
                    <img src="${data.sprites.other.home.front_default}" alt="">
                    <h2>${data.name}</h2>
                </div>
            `)
        });
    }
}

pokemons(500);

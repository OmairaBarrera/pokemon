function getPockemon(done){
    const resuls = fetch("https://pokeapi.co/api/v2/pokemon/1/");
    resuls
        .then(response => response.json())
        .then(data => done(data))
}

getPockemon(data =>{
    console.log(data.name)
    document.querySelector('main').insertAdjacentHTML("beforeend",`
        <div class="pockemon1">
            <img src="${data.sprites.other.home.front_default}" alt="">
            <h2> ${data.name} </h2>
            <p> Habilidad </p>
        </div>
    `)
});
const pokeGrid = document.querySelector('.pokeGrid')


async function loadData(){
    const response= await fetch('http://pokeapi.co/api/v2/pokemone/')
    const data = await response.json()
    populatePokePage(data)
}
function populatePokePage(data){
    const allPokemon = data.results
    for ( const pokemon of allPokemon){

    
    let pokeCard = document.createElement('div')
    pokeCard.className = "pokecard"
    let pokeName = document.createElement('h3')
    pokeName.textContent = pokemon.name

    pokeCard.appendChild(pokeName)
    pokeGrid.appendChild(pokeCard)
    }
}
loadData()
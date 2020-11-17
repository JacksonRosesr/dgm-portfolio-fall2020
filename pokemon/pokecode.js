// Reusable async function to fetch data from the provided url
async function getAPIData(url){
    //try-catch error block
    try { 
    const response= await fetch(url)
    const data = await response.json()
    return(data)
    }
    catch (error){
        console.error(error)
    }
}

//now use async getAPIData function

function loadPage(data){
    getAPIData('https://pokeapi.co/api/v2/pokemon').then (async(data)=>{
        for (const pokemon of data.results){
            await getAPIData(pokemon.url).then((pokeData)=>
            {populatePokecard(pokeData)
            })
            
        }
    })
}

const pokeGrid = document.querySelector('.pokeGrid')

function populatePokecard(singlePokemon){
    console.log(singlePokemon)
    let pokeScene= document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.classname = 'card'
    pokeCard.addEventListener('click', function(){
        pokeCard.classList.toggle('is-flipped')
    })
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')

    let bakcLabel = document.createElement('p')

    bakcLabel.textContent = `${singlePokemon.moves.length} moves`
    pokeBack.appendChild(backLabel)

    let frontLabel = document.createElement('p')
    frontLabel.textContent = singlePokemon.name
    let frontImg = document.createElement('img')
    frontImg.src  = `../images/pokeImages/00${getImageFileName(pokemon)}.png`

    pokeFront.appendChild(frontLabel)
    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}
function getImageFileName(pokemon){
    if (pokemon.id < 10){
        return `00${pokemon.id}`
    }
    else if (pokemon.id>9 && pokemon.id < 100){
        return `0${pokemon.id}`
    }
}
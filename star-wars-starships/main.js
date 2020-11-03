import { starships } from '../data/starships.js'
const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.main')

function populateNav(starships){
    starships.forEach(starship => {
        let anchorWrap = document.createElement('a')
        anchorWrap.href = '#'
        anchorWrap.addEventListener('click', event =>{
            let shipName = event.target.textContent
            const foundShip = starships.find(ship === shipName)
            populateShipView(foundShip)
        })

        let listItem = document.createElement("li")
        listItem.textContent = starship.name

        anchorWrap.appendChild(listItem)
        navList.appendChild(anchorWrap)
        nav.appendChild(navList)
    });
}
function populateShipView(shipData){
    console.log(shipData)
}
populateNav(starships)
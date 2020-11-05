import { starships } from '../data/starships.js'
import{removeChildren, getLastNumber} from '../utils/index.js'

const nav = document.querySelector('.nav')
const navList = document.querySelector('.navList')
const shipView = document.querySelector('.main')

const dialog = document.querySelector('.modal')
const closeButton = document.querySelector('.modal-close')
const modalBackground = document.querySelector('.modal-close')

closeButton.addEventListener("click",() =>{
    dialog.classList.toggle('is-active')
})

modalBackground.addEventListener("click",() =>{
    dialog.classList.toggle('is-active')
})


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
    removeChildren(shipView)
    let shipImg= document.createElement('img')
    let shipNum = getLastNumber(shipData.url)
    shipImg.scr = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`
    shipImg.addEventListener('error', () => {
        shipImage.hidden = true
        dialog.classList.toggle('is-active')
    })
    shipView.appendChild(shipImg)
}
populateNav(starships)

function addStarField(element, numStars) {
    element.style.setProperty('background-color', 'black')
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div')
        star.style.setProperty('position', 'absolute')
        star.style.setProperty('width', '2px')
        star.style.setProperty('height', '2px')
        star.style.setProperty('background-color', 'white')
        let xy = getRandomPosition()
        star.style.left = `${xy[0]}px`
        star.style.top = `${xy[1]}px `
        element.appendChild(star)
    }
}

function getRandomPosition() {
    let y = document.body.scrollHeight
    let x = document.body.scrollWidth
    let randomY = Math.floor(Math.random() * y)
    let randomX = Math.floor(Math.random() * x)
    return [randomX, randomY]
}

addStarField(document.querySelector('body'), 1000)
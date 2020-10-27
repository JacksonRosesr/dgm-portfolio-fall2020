import { people } from '../data/people.js'

const mainContent = document.querySelector('#main')

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)

const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
mainHeader.appendChild(otherButton)

const maleCharacters = people.filter(person => person.gender === 'male')
console.log(maleCharacters)

maleButton.addEventListener('click', (event) => {
    maleCharacters.forEach(person => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/10.jpg`
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = person.name
    
        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)
    
        mainContent.appendChild(charFigure)
    })
})

let theURL = "https://swapi.co/api/people/1/"

function getLastNumber(url) {
    console.log(url)
}

getLastNumber(theURL)

//https://starwars-visualguide.com/assets/img/characters/1.jpg
//"url": "https://swapi.co/api/people/1/"
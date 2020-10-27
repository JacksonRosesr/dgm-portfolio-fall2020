import { people } from '../data/people.js'

const mainContent = document.querySelector('#main')

const mainHeader = document.body.insertBefore(mainHeader, mainContent)
mainHeader.className = "mainHeader"
document.body.appendChild(mainHeader)

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)

const femaleButton = document.createElement('button')
maleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)

const otherButton = document.createElement('button')
maleButton.textContent = 'OtherCharacters'
mainHeader.appendChild(otherButton)

const maleCharacters = people.filter(person=> person.gender === 'male')
console.log(maleCharacters)

const femaleCharacters = people.filter(person=> person.gender === 'female')
const otherCharacters 

maleButton.addEventListener('click', (event) => {
    maleCharacters.forEach(person=>{
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${person.url}.jpg`
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = person.name

        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)
        mainContent.appendChild(charFigure)
    })
})
let theURL = "https://swapi.co/api/people/1/"
function getLastNumber (url){
    console.log(url)
    str(url)
    return[-2]
}
getLastNumber(theURL)
//https://starwars-visualguide.com/assets/img/characters/1.jpg
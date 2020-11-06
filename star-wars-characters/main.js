import { people } from '../data/people.js'

import{ removeChildren} from '../utils/index.js'
import{getLastNumber} from '../utils/index.js'
import{backdrop} from '../utils/index.js'

const mainContent = document.querySelector('#main')

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)

function buttonStyle(buttonName){
    buttonName.style.textDecoration = "underline"
    buttonName.style.borderRadius = '12px'
    buttonName.style.backgroundColor= "#000"
    buttonName.style.color = "#FFE81F"
    buttonName.style.fontFamily = 'Franklin Gothic Medium'
    buttonName.style.fontSize = "large"
}

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
buttonStyle(maleButton)
mainHeader.appendChild(maleButton)

const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
buttonStyle(femaleButton)
mainHeader.appendChild(femaleButton)

const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
buttonStyle(otherButton)
mainHeader.appendChild(otherButton)

const maleCharacters = people.filter(person => person.gender === 'male')

const femaleCharacters = people.filter(person => person.gender === 'female')

const otherCharacters = people.filter(person => {
    if (person.gender === 'n/a' ||
        person.gender === 'none' ||
        person.gender === 'hermaphrodite') {
        return person
    }
})

maleButton.addEventListener('click', () => {populateDOM(maleCharacters)})

femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))

otherButton.addEventListener('click', () => populateDOM(otherCharacters))

function populateDOM(characters) {
    removeChildren(mainContent)
    characters.forEach(element => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(element.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        charImg.addEventListener('error', () => charImg.hidden = true) // genius level
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = element.name
        charCaption.style.color = ("#FFE81F")
        charCaption.style.backgroundColor = "rgba(0,0,0,0.5)"
        charCaption.style.display = 'flex'
        charCaption.style.alignItems = 'center'
        charCaption.style.justifyContent = 'center'
    
        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)
    
        mainContent.appendChild(charFigure)
    })
}
backdrop()
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
   populateDOM(maleCharacters)
})

const femaleCharacters = people.filter(person => person.gender === "female")

femaleButton.addEventListener('click', (event) => {
    populateDOM(femaleCharacters)
 })

//const otherCharacters = people.filter(person => gender === 'n/a')

 otherButton.addEventListener('click', (event) => {
    populateDOM(otherCharacters)
 })


function populateDOM(characters) {
    removeChildren(mainContent)
    characters.forEach(person => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(person.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        charImg.addEventListener('error', () =>{
            console.log("Got a bad image")
            charImg.hidden = true //genius level problem solving
        })
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = person.name
    
        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)
        mainContent.appendChild(charFigure)
    })
}


//let theURL = "https://swapi.co/api/people/1/"

function getLastNumber(url) {
   let end= url.lastIndexOf('/')
   let start = end -2
   if (url.charAt(start) === '/') {
       start++
   }
   return url.slice(start, end)
    
}

function removeChildren(container){
    while(container.firstchild){
        container.removeChild(container.firstchild)
    }
}
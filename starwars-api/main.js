import { films } from './data/films.js'
import {people} from './data/people.js'



const main = document.querySelector("main")

people.forEach(person => {

    console.log(person.name)
    let newTitle = main.appendChild(document.createElement("h1"))
    newTitle.textContent = person.name

    let personImg = document.createElement('img')
    personImg.src = person.url
    main.appendChild(person.img)
}); 
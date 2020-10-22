import { films } from './data/films.js'
import {people} from './data/people.js'



const main = document.querySelector("main")

/*people.forEach(person => {

    console.log(person.name)
    let newTitle = main.appendChild(document.createElement("h1"))
    newTitle.textContent = person.name

    let personImg = document.createElement('img')
    personImg.src = person.url
    main.appendChild(person.img)
}); */
let str = '';

for (let i = 0; i < 7; i++) {
    /*let filmTitle = film[i].title
    main.appendChild(filmTitle)
    console.log(films[i].title)*/

    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src= `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
    let figCaption = document.createElement('figCaption')
    figCaption.textContent = films[i].title

    /*let posterImg = document.createElement('img')
    posterImg.src = 'https://starwars-visualguide.com/assets/img/films/' + (i + 1) + '.jpg'
    main.appendChild(posterImg)
    console.log(films[i].title)*/

    figure.appendChild(figImg)
    figure.appendChild(figCaption)

    main.appendChild(figure)
}


  
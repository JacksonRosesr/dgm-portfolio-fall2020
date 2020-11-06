import { films } from '../data/films.js'

import{backdrop} from '../utils/index.js'

const main = document.querySelector('main')
const body = document.querySelector('body')

for (let i = 0; i < 7; i++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = films[i].title
    figCaption.style.fontSize = "x-large";
    figCaption.style.textDecoration = ("underline")
    figCaption.style.backgroundSize = ('x-large')

    figure.appendChild(figImg)
    figure.appendChild(figCaption)

    main.appendChild(figure)
}
backdrop()
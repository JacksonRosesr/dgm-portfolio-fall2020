import { films } from '../data/films.js'
import{ backdrop, getLastNumber } from '../utils/index.js'

const main = document.querySelector('main')



for (let i = 0; i < 7; i++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg` 
    let figCaption = document.createElement('figcaption')

    const foundFilm = films.find(film => getLastNumber(film.url) == (i+1))

    figCaption.textContent = foundFilm.title

    figCaption.style.fontSize = ("x-large");
    figCaption.style.textDecoration = ("underline")
    figCaption.style.backgroundSize = ('x-large')

    figure.appendChild(figImg)
    figure.appendChild(figCaption)

    main.appendChild(figure)
  }
  backdrop()
import { films } from '../data/films.js'

const main = document.querySelector('main')
const body = document.querySelector('body')

for (let i = 0; i < 7; i++) {
    let figure = document.createElement('figure')
    let figImg = document.createElement('img')
    figImg.src = `https://starwars-visualguide.com/assets/img/films/${i + 1}.jpg`
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = films[i].title

    figure.appendChild(figImg)
    figure.appendChild(figCaption)

    main.appendChild(figure)
}
function backdrop(){
    function randomI(max) { 
       return (Math.floor(Math.random() * Math.floor(max)));
    }
document.getElementById("mainContent").style.backgroundImage = `url(../BackDrops/backdrop:${randomI(7)}.jpg)`;
}
backdrop()
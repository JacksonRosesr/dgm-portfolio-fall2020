import { senators } from '../data/senators.js'
import { removeChildren } from '../utils/index.js'
const senatorGrid = document.querySelector('.senatorGrid')
const seniorityButton = doucment.querySelector('#seniorityButton')
const birthdayButton = document.querySelector('#birthdayButton')

birthdayButton.addEventListener('click', )

function populateSenatorDiv(simpleSenators) {
    removeChildren(senatorGrid)
    simpleSenators.forEach(senator => {
        let senDiv = document.createElement('div')
        let senFigure = document.createElement('figure')
        let figImg = document.createElement('img')
        let figCaption = document.createElement('figcaption')
        let partyIcon = document.createElement('i')
        if (senator.party === 'R') partyIcon.className = 'fas fa-republican'
        if (senator.party === 'D') partyIcon.className = 'fas fa-democrat'
        if (senator.party === 'ID') partyIcon.className = 'fas fa-star'
        figImg.src = senator.imgURL
        figCaption.textContent = senator.name

        figCaption.appendChild(partyIcon)
        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senDiv.appendChild(senFigure)
        senDiv.appendChild(progressBars(senator))
        senatorGrid.appendChild(senDiv)
    })
}
function getSimplifiedSenators(senatorArray){
    return senatorArray.map(senator=>{
        let middleName= senator.middleName ? ` ${senator.middleName} ` : ``
        return{
            id: senator.id,
            name: `${senator.first_name}${senator.middleName}${senator.last_name}`,
            imgURL: `https://www.govetrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            seniority: parsInt(senator.seniority, 10),
            missedVotesPct: senator.missed_votes_pct,
            loyaltyPct: senator.votes_with_party_pct,
            party: senator.party,
            date_of_birth: senator.date_of_birth
        }
    })
}

const filterSenators = (prop, value)=>{
    return getSimplifiedSenators(senators).filter(senator =>{
        return senator[prop] === value
    })
}

const republicans = filterSenators('party', 'R')
const democrats = filterSenators('party', 'D')

const mostSeniority = getSimplifiedSenators(senators).reduce((acc, senator)
=> acc.seniority> senator.seniority ? acc : senator)

const missedVotes = getSimplifiedSenators(senators).reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)

function birthdaySort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return a.date_of_birth - b.date_of_birth
    }))
}

function senioritySort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return a.seniority - b.seniority
    }))
}

console.log(mostSeniority, missedVotes)


populateSenatorDiv(getSimplifiedSenators(senators))
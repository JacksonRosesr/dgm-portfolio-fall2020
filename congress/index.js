import { senators } from '../data/senators.js'
import { removeChildren } from '../utils/index.js'
const senatorGrid = document.querySelector('.senatorGrid')
const seniorityButton = document.querySelector('#seniorityButton')
const youthButton = document.querySelector('#youthButton')
const birthdayButton = document.querySelector('#birthdayButton')
const birthdayButtonReverse = document.querySelector('#birthdayButtonReverse')
const republicanButton = document.querySelector('#repButton')
const democraticButton = document.querySelector('#demButton')
const indeButton = document.querySelector('#indeButton')


birthdayButton.addEventListener('click', () => {
    birthdaySort()
})
birthdayButtonReverse.addEventListener('click', () => {
    birthdaySortReverse()
})
seniorityButton.addEventListener('click', () => {
    senioritySort()
})
youthButton.addEventListener('click', () => {
    youthSort()
})

republicanButton.addEventListener('click', () => {
    republicanDisplay()
})
democraticButton.addEventListener('click', () => {
    democratDisplay()
})
indeButton.addEventListener('click', () => {
    iDisplay()
})
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
        figCaption.textContent = senator.name + " "

        figCaption.appendChild(partyIcon)
        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        senDiv.appendChild(senFigure)
        //senDiv.appendChild(progressBars(senator))
        senatorGrid.appendChild(senDiv)
    })
}
function getSimplifiedSenators(senatorArray) {
    return senatorArray.map(senator => {
        let middleName = senator.middleName ? ` ${senator.middleName} ` : ` `
        return {
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            seniority: parseInt(senator.seniority, 10),
            missedVotesPct: senator.missed_votes_pct,
            loyaltyPct: senator.votes_with_party_pct,
            party: senator.party,
            date_of_birth: parseInt(senator.date_of_birth, 10)
        }
    })
}
const filterSenators = (prop, value) => {
    return getSimplifiedSenators(senators).filter(senator => {
        return senator[prop] === value
    })
}

const republicans = filterSenators('party', 'R')
const democrats = filterSenators('party', 'D')
const independents = filterSenators('party', 'ID')

const mostSeniority = getSimplifiedSenators(senators).reduce((acc, senator) => acc.seniority > senator.seniority ? acc : senator)

const missedVotes = getSimplifiedSenators(senators).reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)

//Oldest to Youngest
function birthdaySort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return a.date_of_birth - b.date_of_birth
    }))
}
//Youngest to Oldest
function birthdaySortReverse() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return b.date_of_birth - a.date_of_birth
    }))
}

//Highest to Lowest Seniority
function senioritySort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return b.seniority - a.seniority
    }))
}
//Lowest to Highest Seniority
function youthSort() {
    populateSenatorDiv(getSimplifiedSenators(senators).sort((a, b) => {
        return a.seniority - b.seniority
    }))
}
//Show only Republicans
function republicanDisplay() {
    populateSenatorDiv(populateSenatorDiv(republicans).sort((a, b) => {
        return a.seniority - b.seniority
    }))

}
//Show only Democrats
function democratDisplay() {
    populateSenatorDiv(populateSenatorDiv(democrats).sort((a, b) => {
        return a.seniority - b.seniority
    }))
}
//Show only Independents
function iDisplay() {
    populateSenatorDiv(populateSenatorDiv(independents).sort((a, b) => {
        return a.seniority - b.seniority
    }))
}

console.log(mostSeniority, missedVotes, republicans, democrats)


populateSenatorDiv(getSimplifiedSenators(senators))
const cont = document.getElementById('cont')
const btn = document.getElementById('btn')

let counter = 0
let bg;

const addCounter = () => {
    counter++
}

const setBg = (counter) => {
    if(counter === 1) {
        const bg = 'background: linear-gradient(208.52deg, #16C177 12.53%, #C4C4C4 23.93%);'
        return cont.style = bg
    } else if (counter === 2) {
        const bg = 'background: linear-gradient(224.34deg, #16C177 19.01%, #C4C4C4 31.37%);'
        return cont.style = bg
    } else if (counter === 3) {
        const bg = 'background: linear-gradient(250.06deg, #16C177 29.24%, #C4C4C4 39.07%);'
        return cont.style = bg
    } else if (counter === 4) {
        const bg = 'background: linear-gradient(270.49deg, #16C177 45.59%, #C4C4C4 53.42%);'
        return cont.style = bg
    } else if (counter === 5) {
        const bg = 'background: linear-gradient(310.91deg, #16C177 47.23%, #65C29A 57.56%, #C4C4C4 68.35%);'
        return cont.style = bg
    } else if (counter === 6) {
        const bg = 'background: linear-gradient(323.69deg, #16C177 58.9%, #65C29A 66.63%, #C4C4C4 74.7%);'
        console.log(counter)
        return cont.style = bg
    } else if (counter === 7) {
        const bg = 'background: linear-gradient(10.69deg, #16C177 100%, #65C29A 100%, #C4C4C4 111.83%);'
        console.log(counter)
        return cont.style = bg
    }
}

btn.addEventListener('click', () => {
    addCounter()
    for(counter; counter < 8; counter++) {
        if(counter > 8) return;
        setBg(counter)
        return
    }
})
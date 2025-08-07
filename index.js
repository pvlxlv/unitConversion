/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// DOM elements
const inputEl = document.getElementById("convert-input")
const buttonEl = document.getElementById("convert-btn")
let lengthEl = document.getElementById("calculation-length")
let volumeEl = document.getElementById("calculation-volume")
let massEl = document.getElementById("calculation-mass")

//Default values inisialisation
let inputNum = 30
const dimensionsConst = [3.281, 0.264, 2.204]
inputEl.value = inputNum

renderUnits()


buttonEl.addEventListener("click", function(){
    inputNum = inputEl.value
    renderUnits()
})

function renderUnits() {
    lengthEl.textContent = `${inputNum} meters = ${getValue(dimensionsConst[0], "direct")} feet | ${inputNum} feet = ${getValue(dimensionsConst[0], "reverse")} meters`
    volumeEl.textContent = `${inputNum} liters = ${getValue(dimensionsConst[1], "direct")} gallons | ${inputNum} gallons = ${getValue(dimensionsConst[1], "reverse")} liters`
    massEl.textContent = `${inputNum} kilos = ${getValue(dimensionsConst[2], "direct")} pounds | ${inputNum} pounds = ${getValue(dimensionsConst[2], "reverse")} kilos`
}

function getValue(coeficient, calculation) {
    if (calculation === "direct") {
        return (inputNum * coeficient).toFixed(3)
    } else if (calculation === "reverse") {
        return (inputNum / coeficient).toFixed(3)
    }
    
}



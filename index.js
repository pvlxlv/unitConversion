/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("convert-input")
const buttonEl = document.getElementById("convert-btn")
let lengthEl = document.getElementById("calculation-length")
let volumeEl = document.getElementById("calculation-volume")
let massEl = document.getElementById("calculation-mass")


//default value = 20
let value = Number(inputEl.value)
const dimensionsConst = [3.281, 0.264, 2.204]

buttonEl.addEventListener("click", function(){
    // value from input or default value
    value = Number(inputEl.value)

    lengthEl.textContent = `${value} meters = ${getValue(dimensionsConst[0], "direct")} feet | ${value} feet = ${getValue(dimensionsConst[0], "reverse")} meters`
    volumeEl.textContent = `${value} liters = ${getValue(dimensionsConst[1], "direct")} gallons | ${value} gallons = ${getValue(dimensionsConst[1], "reverse")} liters`
    massEl.textContent = `${value} kilos = ${getValue(dimensionsConst[2], "direct")} pounds | ${value} pounds = ${getValue(dimensionsConst[2], "reverse")} kilos`
    console.log(value)
})

function getValue(coeficient, calculation) {
    if (calculation === "direct") {
        return (value * coeficient).toFixed(3)
    } else if (calculation === "reverse") {
        return (value / coeficient).toFixed(3)
    }
    
}



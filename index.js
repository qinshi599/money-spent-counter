let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let overBudget = document.getElementById("overbudget-el")
let count = 0
let totalcost = 0

function cost5() {
    count += 5
    countEl.textContent = count
}
function cost1() {
    count += 1
    countEl.textContent = count
}

function save() {
    totalcost += count
    saveEl.innerText = "Total spent: " + totalcost
    countEl.innerText = 0
    count = 0
}


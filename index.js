let countEl=document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(countEl)
function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    count = 0
    countEl.textContent = count
}
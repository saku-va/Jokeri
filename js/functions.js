
let valmiitkenttä = document.querySelector("p");
let valmiitrivit = 0;
let taulukkokenttä = document.querySelector("table");

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

addEventListener("DOMContentLoaded", () => {
    valmiitkenttä.innerHTML = "Valmiita rivejä " + valmiitrivit
});

document.querySelector('button').addEventListener('click',() => {
    valmiitrivit = valmiitrivit + 1
    valmiitkenttä.innerHTML = "Valmiita rivejä " + valmiitrivit
    var row = taulukkokenttä.insertRow(taulukkokenttä.rows.length);
    for (let i = 0; i < 7; i++) {
        var cell = row.insertCell(i);
        cell.innerHTML = getRandomIntNumberInRange(0, 9)
      }
})
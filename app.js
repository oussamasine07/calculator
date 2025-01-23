// select all buttons
const btns = document.querySelectorAll("div");
const input = document.getElementById("input");

let currentNum = 0;
let nextNum = 0;
let result = 0;
let countClick = 1;



var div = document.createElement('div');
div.innerHTML = '&divide;';  // Using the entity
// console.log(div.textContent);

// inter a number
// a number should consist of only one (.)

const operators = {
    "+": "+",
    "-": "-",
    "÷": "/",
    "×": "*"
}

document.addEventListener("click", e => {
    const btnContent = e.target.innerText;

    if ( parseInt(btnContent) >= 0 && parseInt(btnContent) < 10 ) {
        
        if ( parseInt(input.innerText) == 0 ) {
            input.innerText = btnContent;
        } else {
            input.innerText += btnContent;
        }    
    }
    
});
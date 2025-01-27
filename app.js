// select all buttons
const btns = document.querySelectorAll("div");
const input = document.getElementById("input");
const result = document.getElementById("result");

let currentNum = 0;
let nextNum = 0;
let calcResult = 0;
let countClick = 1;



var div = document.createElement('div');
div.innerHTML = '&divide;';  // Using the entity
// console.log(div.textContent);


const operators = {
    "+": "+",
    "-": "-",
    // "÷": "/",
    [div.textContent]: "/",
    "×": "*"
}


document.addEventListener("click", e => {
    
    const btnContent = e.target.innerText;
    if ( e.target.parentElement.classList.contains("numbers") ) {
        
        if ( parseInt(input.innerText) == 0 ) {
            input.innerText = btnContent;
        } else {
            // check if entered number already has (.)
            input.innerText += btnContent;
            // check for logical operator
            // the logicl operator should be only once
            // start entering the new number
            // check if the new number already has (.)
        }    
    }
    
});

result.addEventListener("click", () => {
    // 3tiha ib9a idakhal ar9am, ghir ichofo ddakhal chi operator khas ib9a idakhal ra9m tani, mn ba3d ghir i clicki = khas idir dik l3amalia l7isbia 3la hasab les operateurs li dakhal
});
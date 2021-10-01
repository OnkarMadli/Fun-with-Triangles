const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    if(Number(sides[0].value)<1 || Number(sides[1].value)<1){
        outputEl.innerText= 'Please enter a positive number';
    } else {
        const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        outputEl.innerText = "The length of the hypotenuse is: " + lengthOfHypotenuse;
    }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
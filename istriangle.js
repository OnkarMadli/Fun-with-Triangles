const inputs = document.querySelectorAll('.angle-input');
const isTraingleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfTraingles(angle1,angle2,angle3){
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

function isTraingle(angle1,angle2,angle3) {
    if(Number(inputs[0].value)<1 ||
    Number(inputs[1].value)<1 ||
    Number(inputs[2].value)<1){
        outputEl.innerText="Please enter a valid positive angle"
    } else {
        const sumOfAngles = calculateSumOfTraingles(
            Number(inputs[0].value),
            Number(inputs[1].value),
            Number(inputs[2].value));
        if(sumOfAngles === 180){
            outputEl.innerText = "Yay! The angles form a traingle.";
        } else {
            outputEl.innerText = "Oh Oh! The angles don't form a traingle.";
        }
    }
    
}

isTraingleBtn.addEventListener('click',isTraingle);
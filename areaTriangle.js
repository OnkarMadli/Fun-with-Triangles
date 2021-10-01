const dimensions = document.querySelectorAll(".dim-input");
const outputEl = document.querySelector("#output");
const checkAreaBtn = document.querySelector("#check-area-btn");

function calculateArea(){
    const triangleArea = (Number(dimensions[0].value)*Number(dimensions[1].value))/2;
    return triangleArea;
}

function checkTriangleArea(){
    if(Number(dimensions[0].value) < 1 || Number(dimensions[1].value)<1){
        outputEl.innerText = 'Please enter a positve number';
    } else {
        const triangleArea = calculateArea();
        outputEl.innerText = "Area of the Triangle is: "+triangleArea+"cm2";
    }
}
    

checkAreaBtn.addEventListener('click', checkTriangleArea);
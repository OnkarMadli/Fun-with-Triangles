const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('#output');

const correctAns = ['90°','right-anngled'];

function calculateScore() {
    let score = 0;
    const formResults = new FormData(quizForm);
    const index=0;
    for(let answer of formResults.values()){
        if(answer === correctAns[index]){
            score += 1;
        }
        index += 1;
    }
    outputEl.innerText = "Your score is: " + score;
}

submitAnswerBtn.addEventListener('click', calculateScore);

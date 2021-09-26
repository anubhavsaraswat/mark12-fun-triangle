const quizForm=document.querySelector(".quiz-form");
const submitBtn=document.querySelector("#submit")
const outputFinal=document.querySelector("#output");

const correctAns=["90°","right"];

submitBtn.addEventListener("click",clickHandler);

function clickHandler(){
    let score=0;
    let index=0;
    const formResult = new FormData(quizForm);
    for (let value of formResult.values()){         //Main Logic 
        if(value === correctAns[index]){
            score=score+1;
        }
        index=index+1;
    }
 outputFinal.innerText = "your score is " + score;
}
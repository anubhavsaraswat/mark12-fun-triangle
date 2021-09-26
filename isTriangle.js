const inputs=document.querySelectorAll(".angle-input");
const checkTriangle=document.querySelector("#check");
const finalOutput=document.querySelector("#output");

checkTriangle.addEventListener("click",isTriangle);


function isTriangle(){
    const sumofAngles=calculateSumofangles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
    
    if(sumofAngles===180){
        finalOutput.innerText="Yes , It is a Triangle"
    } else{
        finalOutput.innerText="No,It is not a Triangle"
    }

}

function calculateSumofangles(angle1,angle2,angle3){
    const sum= angle1+angle2+angle3;
    return sum;
}
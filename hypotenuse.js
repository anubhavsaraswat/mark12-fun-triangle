const sides=document.querySelectorAll(".side-input");
const calButton=document.querySelector("#calculateHypotenuse");
const outputResult=document.querySelector("#output");


function sumofSides(a,b){
    const bothSidessum = a*a+b*b;
    return bothSidessum;
}

function clickHandler(){

    const sumofInput = sumofSides(Number(sides[0].value),Number(sides[1].value));
    const hypotenuseLength= Math.sqrt(sumofInput);
    outputResult.innerText="Length of Hypotenuse is " + hypotenuseLength;

}


calButton.addEventListener("click",clickHandler);




const inputs = document.querySelectorAll(".area-input");
const areaBtn = document.querySelector("#area-btn");
const areaOutput = document.querySelector("#area-output");


areaBtn.addEventListener("click", calculateArea);


function calculateArea() {
	const basexheight = multiplyBaseAndHeight(inputs[0].value, inputs[1].value);
	const area = basexheight / 2;
	areaOutput.innerText = "The area of the triangle is " + area +"cm²";
}


function multiplyBaseAndHeight(base, height) {
	const multipliedOutput = base * height;
	return multipliedOutput;
}


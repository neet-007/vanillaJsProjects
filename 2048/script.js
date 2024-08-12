const main = document.getElementsByTagName("main");
/**
 *@type {HTMLDivElement}
 * */
const scoresDiv = document.getElementById("score-div");
/**
 *@type {HTMLDivElement}
 * */
const gameDiv = document.getElementById("game-div");
gameDiv.style.width = "500px";
gameDiv.style.height = "500px";
gameDiv.style.border = "1px solid black";

const gameState = [0, 0];
let startPosition = { x: 0, y: 0 };

gameDiv.addEventListener("pointerdown", pointerdown);

function makeRect(num) {
	const rect = document.createElement("div");
	rect.classList.add("rect");
	rect.setAttribute("data-num", num);
	rect.innerHTML = num;

	return rect;
}
const rect = makeRect("2");
const rect1 = makeRect("4");
const rect2 = makeRect("8");
const rect3 = makeRect("16");
const rect4 = makeRect("32");
const rect5 = makeRect("64");
gameDiv.appendChild(rect);
gameDiv.appendChild(rect1);
gameDiv.appendChild(rect2);
gameDiv.appendChild(rect3);
gameDiv.appendChild(rect4);
gameDiv.appendChild(rect5);
/**
 *@param {PointerEvent} e
 * */
function pointerdown(e) {
	startPosition = { x: e.clientX, y: e.clientY };
	gameDiv.removeEventListener("pointerdown", pointerdown);
	gameDiv.addEventListener("pointermove", pointermove);
}

/**
 *@param {PointerEvent} e 
 * */
function pointermove(e) {
	gameDiv.removeEventListener("pointermove", pointermove);
	gameDiv.addEventListener("pointerdown", pointerdown);
	const diff = { x: e.clientX - startPosition.x, y: e.clientY - startPosition.y };
	if (Math.abs(diif.x) > Math.abs(y)) {
		if (diff.x > 0) {
			//rigth
		} else {
			//left
		}
	} else if (Math.abs(diff.y) > Math.abs(diff.x)) {
		if (diff.y > 0) {
			//down
		} else {
			//up
		}
	} else {
		//45 deg 
	}
}




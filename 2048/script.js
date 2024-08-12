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
const rectArr = [
	[undefined, undefined, undefined, undefined],
	[undefined, undefined, undefined, undefined],
	[undefined, undefined, undefined, undefined],
	[undefined, undefined, undefined, undefined]
];
let fillCount = 0;


gameDiv.addEventListener("pointerdown", pointerdown);

function makeRect() {
	if (fillCount >= (rectArr.length * rectArr[0].length)) {
		return
	}

	const num = "2";
	const rect = document.createElement("div");
	rect.classList.add("rect");
	rect.setAttribute("data-num", num);
	rect.innerHTML = num;

	const index = [-1, -1];
	do {
		index[0] = Math.floor(Math.random() * rectArr.length - 1);
		index[1] = Math.floor(Math.random() * rectArr[0].length - 1);
	} while (rectArr[index[0]][index[1]] !== undefined);

	gameDiv.appendChild(rect);
	rectArr[index[0]][index[1]] = rect;

	fillCount++;
}

function moveRects(coord, dir) {
	console.log(rectArr)
	if (coord === "x") {
		if (dir > 0) {
			for (let i = 0; i < rectArr.length; i++) {
				for (let j = rectArr[i].length - 2; j > -1; j--) {
					if (rectArr[i][j] === undefined) {
						continue
					}
					console.log(i, j)
					console.log(rectArr[i][j]);
					let count = 1;
					while (j + count < rectArr[i].length) {
						if (rectArr[i][j + count] !== undefined) {
							if (rectArr[i][j].innerHTML !== rectArr[i][j + count].innerHTML) {
								break
							}
							//merge
						} else {
							rectArr[i][j].style.transform = "translateX(125px)";
							rectArr[i][j + count] = rectArr[i][j];
							rectArr[i][j] = undefined;
						}
						count++;
					}
				}
			}
		} else {
			for (let i = 0; i < rectArr.length; i++) {
				for (let j = 1; j < rectArr[i].length; j++) {
					if (rectArr[i][j] === undefined) {
						continue
					}
					console.log(i, j)
					console.log(rectArr[i][j]);
					let count = 1;
					while (j - count > -1) {
						if (rectArr[i][j - count] !== undefined) {
							if (rectArr[i][j].innerHTML !== rectArr[i][j - count].innerHTML) {
								break
							}
							//merge
						} else {
							rectArr[i][j].style.transform = "translateX(-125px)";
							rectArr[i][j - count] = rectArr[i][j];
							rectArr[i][j] = undefined;
						}
						count++;
					}
				}
			}
		}
	} else {
		if (dir > 0) {
			for (let i = 0; i < rectArr[0].length; i++) {
				for (let j = rectArr.length - 2; j > -1; j--) {
					if (rectArr[j][i] === undefined) {
						continue
					}
					console.log(j, i)
					console.log(rectArr[j][i]);
					let count = 1;
					while (j + count < rectArr.length) {
						if (rectArr[j + count][i] !== undefined) {
							if (rectArr[j][i].innerHTML !== rectArr[j + count][i].innerHTML) {
								break
							}
							//merge
						} else {
							rectArr[j][i].style.transform = "translateX(125px)";
							rectArr[j + count][i] = rectArr[j][i];
							rectArr[j][i] = undefined;
						}
						count++;
					}
				}
			}
		} else {
			for (let i = 0; i < rectArr[0].length; i++) {
				for (let j = 1; j < rectArr.length; j++) {
					if (rectArr[j][i] === undefined) {
						continue
					}
					console.log(j, i)
					console.log(rectArr[j][i]);
					let count = 1;
					while (j - count > -1) {
						if (rectArr[j - count][i] !== undefined) {
							if (rectArr[j][i].innerHTML !== rectArr[j - count][i].innerHTML) {
								break
							}
							//merge
						} else {
							rectArr[j][i].style.transform = "translateX(-125px)";
							rectArr[j - count][i] = rectArr[j][i];
							rectArr[j][i] = undefined;
						}
						count++;
					}
				}
			}
		}
	}
}

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
	if (Math.abs(diff.x) > Math.abs(diff.y)) {
		moveRects("x", diff);
	} else if (Math.abs(diff.y) > Math.abs(diff.x)) {
		moveRects("y", diff);
	} else {
		//45 deg 
	}
	makeRect();
}




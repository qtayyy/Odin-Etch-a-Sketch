const	container = document.querySelector(".container");
const	button = document.querySelector(".btn");
let		numSquares = 60;

generateGrids();

function	generateGrids()
{
	let	size = 960 / numSquares;
	for(let i = 0; i < numSquares * numSquares; i++)
	{
		const	grid = document.createElement("div");
		grid.setAttribute("class", "grid");
		grid.style.width = String(size) + "px";
		grid.style.height = String(size) + "px";
		grid.style.maxWidth = String(size) + "px";
		container.appendChild(grid);
	}
}

button.addEventListener("click", () => {
	const temp = Number(prompt("Desired number of squares per side (max 100):"));
	if (Number.isInteger(temp) && temp > 0 && temp <= 100)
	{
		numSquares = temp;
	
		const	allGrids = document.querySelectorAll(".grid");
		allGrids.forEach( (grid) => {
			container.removeChild(grid);
		})

		generateGrids();
	}
	else
	{
		alert("Please enter a positive integer!");
	}
})

/**
 * From Stack Overflow
 */
function getRandomColor() {
	let	letters = '0123456789ABCDEF';
	let	color = '#';
	for (let i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
  
container.addEventListener("mousemove", (e) => {
	let	currGrid = e.target;
	currGrid.style["background-color"] = getRandomColor();	
	let opacityVal = Number(currGrid.style["opacity"]);
	if (opacityVal)
		currGrid.style["opacity"] = String(opacityVal + 0.1);
	else
		currGrid.style["opacity"] = 0.1;
});

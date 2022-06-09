const container = document.querySelector(".container");

const colorSelector = document.querySelector("#colorPicker");

let color = "black";

const toggleBorder = document.querySelector(".toggleBorder");

colorSelector.addEventListener("change", (e) => {
  color = e.target.value;
});

let flag = false;
container.addEventListener("mousedown", () => (flag = true));

container.addEventListener("mouseup", () => (flag = false));

const pickYourCanvas = document.querySelector(".pickYourCanvas");
pickYourCanvas.addEventListener("click", () => {
  const canvasSize = prompt("How big do you want your canvas to be?");
  if (canvasSize > 100) {
    alert("Your canvas is too big! (Max 100 x 100)");
  } else if (!canvasSize) {
    alert("Canceled");
  } else {
    container.innerHTML = `<div class="row">${'<div class="cell"></div>'.repeat(
      canvasSize
    )}</div>`.repeat(canvasSize);
    const cells = document.querySelectorAll(".cell");
    Array.from(cells).forEach((cell) => {
      cell.addEventListener("mouseover", colorTile);
    });
  }
});

const colorTile = (e) => {
  if (!flag) return;
  e.target.style.backgroundColor = color;
};

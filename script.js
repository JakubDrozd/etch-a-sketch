const container = document.querySelector(".container");

container.innerHTML = `<div class="row">${'<div class="cell"></div>'.repeat(
  16
)}</div>`.repeat(16);

const colorSelector = document.querySelector("#colorPicker");

let color = "black";

const toggleBorder = document.querySelector(".toggleBorder");
toggleBorder.addEventListener("click", hideBorder);

function hideBorder() {
  cell.style.border = "none";
}

colorSelector.addEventListener("change", (e) => {
  color = e.target.value;
});

let flag = false;
container.addEventListener("mousedown", () => (flag = true));

container.addEventListener("mouseup", () => (flag = false));

const size = document.querySelector(".size");
size.addEventListener("input", changeSize);

function changeSize(e) {
  const canvasSize = e.target.value;
  container.innerHTML = `<div class="row">${'<div class="cell"></div>'.repeat(
    canvasSize
  )}</div>`.repeat(canvasSize);
  const cells = document.querySelectorAll(".cell");
  Array.from(cells).forEach((cell) => {
    cell.addEventListener("mouseover", colorTile);
  });
}

const colorTile = (e) => {
  if (!flag) return;
  e.target.style.backgroundColor = color;
};

const cells = document.querySelectorAll(".cell");
Array.from(cells).forEach((cell) => {
  cell.addEventListener("mouseover", colorTile);
});

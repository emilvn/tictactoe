import * as controller from "./controller.js";

export function init(grid) {
  displayBoard(grid);
  const cells = document.querySelectorAll(".cell");
  const restartButton = document.querySelector("#restart");
  restartButton.addEventListener("click", controller.handleClear);

  cells.forEach((cell, i) => {
    cell.addEventListener("click", (e) => controller.setCell(e, i));
  });
}

export function setCellContent(element, value) {
  const content = value ? "❌" : "⭕";
  element.innerText = content;
}

export function clearContent() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((c) => (c.innerText = ""));
}

export function displayBoard(grid) {
  const board = document.querySelector("#board");
  const rows = grid.rowNum;
  const cols = grid.colNum;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      board.insertAdjacentHTML("beforeend", '<div class="cell"></div>');
    }
  }
  board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}

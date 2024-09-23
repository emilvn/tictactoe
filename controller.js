import { Grid } from "./model.js";
import * as view from "./view.js";

window.addEventListener("load", init);

// works with all sizes, but columns and rows must be equal
const ROW_NUM = 3;
const COL_NUM = ROW_NUM;
let isXturn = true;
let grid;

function init() {
  grid = new Grid(ROW_NUM, COL_NUM);
  view.init(grid);
}

export function setCell(e, i) {
  if (grid.getIndexContent(i) !== undefined) return;
  grid.writeToIndex(isXturn, i);
  view.setCellContent(e.target, isXturn);
  isXturn = !isXturn;
  const winner = grid.getWinner();
  if (winner !== undefined) {
    view.showWinnerDialog(winner);
  }
}

export function handleClear() {
  view.clearContent();
  grid.clear();
  isXturn = true;
}

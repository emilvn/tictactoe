import { Grid } from "./model.js";
import * as view from "./view.js";

window.addEventListener("load", init);

const ROW_NUM = 7;
const COL_NUM = 7;
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
  grid.dump();
}

export function handleClear() {
  view.clearContent();
  grid.clear();
  isXturn = true;
}

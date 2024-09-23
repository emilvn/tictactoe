export class Grid {
  grid = [];
  rowNum;
  colNum;

  constructor(rowNum, colNum) {
    this.rowNum = rowNum;
    for (let i = 0; i < rowNum; i++) {
      this.grid[i] = [];
    }
    this.colNum = colNum;
  }

  getCellContent(row, col) {
    return this.grid[row][col];
  }

  getIndexContent(i) {
    const [row, col] = this.getRowAndColFromIndex(i);
    return this.getCellContent(row, col);
  }

  writeToIndex(element, i) {
    const [row, col] = this.getRowAndColFromIndex(i);
    this.writeToCell(element, row, col);
  }

  writeToCell(element, row, col) {
    console.log(element, row, col);
    this.grid[row][col] = element;
  }

  getRowAndColFromIndex(i) {
    const col = i % this.colNum;
    const row = Math.floor(i / this.rowNum);
    return [row, col];
  }

  //TODO: make method to get winning combinations.
  // the 2 diagonals, and one for each row and one for each col.

  clear() {
    this.grid = [];
    for (let i = 0; i < this.rowNum; i++) {
      this.grid[i] = [];
    }
  }

  dump() {
    console.table(this.grid);
  }
}

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
    if (this.grid[row] === undefined) return;
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

  getWinningCombinations() {
    const combinations = [];
    const rows = this.rowNum;
    const cols = this.colNum;
    // rows
    for (let r = 0; r < rows; r++) {
      const row = [];
      for (let c = 0; c < cols; c++) {
        row.push([r, c]);
      }
      combinations.push(row);
    }
    // cols
    for (let c = 0; c < cols; c++) {
      const col = [];
      for (let r = 0; r < rows; r++) {
        col.push([r, c]);
      }
      combinations.push(col);
    }
    // diagonal
    const diagonal1 = [];
    const diagonal2 = [];
    for (let i = 0, j = cols - 1; i < rows && j >= 0; i++, j--) {
      diagonal1.push([i, i]); // diagonal top left to bottom right is always i, i
      diagonal2.push([i, j]);
    }
    combinations.push(diagonal1);
    combinations.push(diagonal2);
    return combinations;
  }

  getWinner() {
    const winningCombinations = this.getWinningCombinations();
    for (const combination of winningCombinations) {
      const firstElement = this.getCellContent(
        combination[0][0],
        combination[0][1]
      );
      if (firstElement === undefined) continue;
      let isWinning = true;
      for (let i = 1; i < combination.length; i++) {
        const [row, col] = combination[i];
        const element = this.getCellContent(row, col);
        if (element !== firstElement) {
          isWinning = false;
          break;
        }
      }
      if (isWinning) return firstElement;
    }
    return undefined;
  }
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

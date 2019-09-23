class TicTacToe {
  constructor() {
    this.currentPlayer = 'x';
    this.field = [[null, null, null], [null, null, null], [null, null, null]];
    this.turnCounter = 0;
    // For 3 * 3 board, stateOfTheGame  = [row1, row2, row3, col1, col2, col3, diag1, diag2]
    this.stateOfTheGame = new Array(8).fill(0);
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.getFieldValue(rowIndex, columnIndex) === null) {
      let point;
      this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
      if (this.currentPlayer === 'x') {
        this.currentPlayer = 'o';
        point = 1;
      } else {
        this.currentPlayer = 'x';
        point = -1;
      }

      this.turnCounter++;

      this.stateOfTheGame[rowIndex] += point;
      this.stateOfTheGame[columnIndex + 3] += point;
      if (rowIndex === columnIndex) this.stateOfTheGame[6] += point;
      if (rowIndex === 2 - columnIndex) this.stateOfTheGame[7] += point;
    }
  }

  isFinished() {
    return !!this.getWinner() || this.isDraw();
  }

  getWinner() {
    if (this.stateOfTheGame.includes(3)) return 'x';
    if (this.stateOfTheGame.includes(-3)) return 'o';
    return null;
  }

  noMoreTurns() {
    return this.turnCounter === 9;
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex]
      ? this.field[rowIndex][colIndex]
      : null;
  }
}

module.exports = TicTacToe;

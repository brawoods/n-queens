/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// I - number of rooks, size of board n x n
// O - a matrix or array of arrays
window.makeBoard = function(n) {
  var solution = [];
  // iterate n number of times
  for (let j = n; j > 0; j--) {
    // create array the length of n and push it to solution
    solution.push(Array(n).fill(0));
    // solution.push(row);
  }
  return new Board(solution);
};

window.findNRooksSolution = function(n, board) {

  board = board || window.makeBoard(n);
  console.log('board: ', board);
  console.log('board rows: ', board.rows());
  // iterate over solution rows
  // board.rows()[index][index]
  for (let row = 0; row < board.rows().length; row++) {
    // iterate over the board columns
    for (let column = 0; column < board.rows()[row].length; column++) {
      // if value at this index is 0
      // set column at start position
      if (board.rows()[row][column] === 0) {
        // change to 1
        board.rows()[row][column] = 1;
      }
      // if this.hasAnyRowConflicts or this.hasAnyColConflicts is true
        // change to 0
      if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
        board.rows()[row][column] = 0;
      }
    }
  }


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return board.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  let boardMethods = window.makeBoard(n);
  // iterate over the first row
  for (let column = 0; column < boardMethods.rows()[0].length; column++) {
    // invoke makeBoard(n)
    let board = window.makeBoard(n);
    // set board.rows()[0][index] to equal 1
    board.rows()[0][column] = 1;
    // if findNRooksSolution(n, board) is truthy
    if (window.findNRooksSolution(n, board)) {
      // increase solutionCount by 1
      solutionCount++;
    }
  }
  const factorial = n => !(n > 1) ? 1 : factorial(n - 1) * n;
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // if (solutionCount > 2) {
  //   return solutionCount * (n - 1);
  // }
  return factorial(solutionCount);
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

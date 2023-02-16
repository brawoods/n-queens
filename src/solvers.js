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

window.findNRooksSolution = function(n) {
  var solution = [];
  // iterate n number of times
  for (let j = n; j > 0; j--) {
    // create array the length of n and push it to solution
    solution.push(Array(n).fill(0));
    // solution.push(row);
  }

  var board = new Board(solution);

  // iterate over solution rows
  for (let row = 0; row < solution.length; row++) {
    // iterate over the solution columns
    for (let column = 0; column < solution[row].length; column++) {
      // if value at this index is 0
      if (solution[row][column] === 0) {
        // change to 1
        solution[row][column] = 1;
      }
      // if this.hasAnyRowConflicts or this.hasAnyColConflicts is true
        // change to 0
      if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
        solution[row][column] = 0;
      }
    }
  }


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
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

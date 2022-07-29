module.exports = function towelSort (matrix) {
  if (matrix == undefined) {
    return [];
  }
  let sortedArr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let n = 0; n < matrix[i].length; n++) {
      if (i % 2 === 0) {
        sortedArr.push(matrix[i][n]);
      } else {
        sortedArr.push(matrix[i][[matrix[i].length - n - 1]]);
      }
    }
  }
  return sortedArr;
}


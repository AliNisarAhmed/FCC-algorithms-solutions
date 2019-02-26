function largestGridProduct (grid) {
  let height = grid.length;
  let width = grid[0].length;
  let max = 1;
  for (let i = 0; i < height; i++) {
    for (let first = 0; first <= width - 4; first++) {
      let second = first + 1;
      let third = first + 2;
      let fourth = first + 3;
      let product = grid[i][first] * grid[i][second] * grid[i][third] * grid[i][fourth];
      let product2 = grid[first][i] * grid[second][i] * grid[third][i] * grid[fourth[i]];
      if (product > max) {
        max = product;
      }
      if (product2 > max) {
        max = product;
      }
    }
  }
  
  for (let i = 0; i < height - 3; i++) {
    for (let first = 0; first <= height - 4; first++) {
      let second = first + 1;
      let third = first + 2;
      let fourth = first + 3;
      let product = grid[i][first] * grid[i + 1][second] * grid[i + 2][third] * grid[i + 3][fourth];
      if (product > max) {
        max = product;
      }
    }
  }
  for (let i = 0; i < height - 3;  i++) {
    for (let first = height - 1; first >= 3; first--) {
      let second = first - 1;
      let third = first - 2;
      let fourth = first - 3;
      let product = grid[i][first] * grid[i + 1][second] * grid[i + 2][third] * grid[i + 3][fourth];
      if (product > max) {
        max = product;
      }
    }
  }
  return max;
}


const testGrid = [
  [40, 17, 81, 18, 57],
  [74, 4, 36, 16, 29],
  [36, 42, 69, 73, 45],
  [51, 54, 69, 16, 92],
  [7, 97, 57, 32, 16]
];

console.log(largestGridProduct(testGrid)) // should return 14169081

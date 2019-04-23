function stringSearch (string, target) {
  let count = 0;
  let length = target.length;
  for (let i = 0; i < string.length; i++) {
    if (target[0] === string[i]) {
      let substring = string.slice(i, i + length);
      if (substring === target) {
        count++;
      }
    }
  }
  return count;
}

console.log(stringSearch('abraabra', 'abr'));  // 2
console.log(stringSearch('helloworldhello', 'world'));  // 1
console.log(stringSearch('lorie loled', 'lol'));  // 1
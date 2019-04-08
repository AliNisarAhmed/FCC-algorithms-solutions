function permutations(str) {
  let result = [];
  
  if (str.length === 1) return [str];

  for (let i = 0; i < str.length; i++) {
    let first = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);
    let remainingPerms = permutations(remaining);
    for (let perm of remainingPerms) {
      result.push(first + perm);
    }
  }

  return result;
}

console.log(permutations('abcd'));
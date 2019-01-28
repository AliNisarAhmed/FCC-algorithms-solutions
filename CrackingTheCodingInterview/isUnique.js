
export default function isUnique (string) {
  return [...string].every((letter, i, arr) => {
    let subArr = arr.slice(0, i).concat(arr.slice(i + 1));
    return !subArr.includes(letter);
  })
}

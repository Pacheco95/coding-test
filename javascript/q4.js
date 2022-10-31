// Mutable version
let arr = [1, 2, 3]
const toRemove = 2;
const expected = [1, 3]
const index = arr.indexOf(toRemove);

arr.splice(index, 1)
assert(arr, expected)

// Immutable version
let arr2 = [...arr.slice(0, index), ...arr.slice(index)]
assert(arr2, expected)

function assert(a, b) {
  console.assert(JSON.stringify(a) == JSON.stringify(b))
}
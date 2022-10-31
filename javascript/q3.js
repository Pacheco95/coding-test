// Mutable version
let o = {x: 1, y: 2}
delete o.x

// Immutable version
o = {x: 1, y: 2}

const blocklist = ["x"]
const keyNotInBlocklist = ([key]) => !blocklist.includes(key);
const x = Object.fromEntries(Object.entries(o).filter(keyNotInBlocklist))

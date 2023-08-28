const chunk = require("./lib/chunk")
const compact = require("./lib/compact")
const concat = require("./lib/concat")

const numbers = [1, 2, 3, 8, 4, 12, 7]

// console.log(chunk(numbers, 5))
// console.log(compact([0, 1, false, 2, '', 3]))
console.log(concat(2, [3], [[4]]))
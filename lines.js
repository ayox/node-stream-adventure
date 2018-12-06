const split = require('split')
const through2 = require('through2')
let counter = 0

process.stdin
  .pipe(split())
  .pipe(through2(function (line, _, next) {
    // console.dir()
    // console.dir(line.toString())
    counter++
    next(null, (counter % 2 !== 0 ? line.toString().toLowerCase() : line.toString().toUpperCase()) + '\n')
  })).pipe(process.stdout)

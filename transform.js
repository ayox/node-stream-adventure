const through = require('through2')
const stream = through(write, end)

function write (buffer, encoding, next) {
  // this.push('I got some data: ' + buffer + '\n')
  next(null, buffer.toString().toUpperCase())

}

function end (done) {
  done()
}

process.stdin.pipe(stream).pipe(process.stdout)

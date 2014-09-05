var test = require('tape')
var errors = require('./')

test('one liners', function(t) {
  t.deepEqual(errors("ERROR: 0:1: 'x' : undeclared identifier"), [{
      file: 0
    , line: 1
    , message: "'x' : undeclared identifier"
  }])

  t.deepEqual(errors("ERROR: 0:1: 'y' : undeclared identifier"), [{
      file: 0
    , line: 1
    , message: "'y' : undeclared identifier"
  }])

  t.end()
})

test('combined', function(t) {
  t.deepEqual(errors([
      "ERROR: 0:1: 'x' : undeclared identifier"
    , "ERROR: 0:1: 'y' : undeclared identifier"
  ].join('\n')), [{
      file: 0
    , line: 1
    , message: "'x' : undeclared identifier"
  }, {
      file: 0
    , line: 1
    , message: "'y' : undeclared identifier"
  }])

  t.end()
})

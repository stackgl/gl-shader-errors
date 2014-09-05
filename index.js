module.exports = parseErrors

function parseErrors(log) {
  log = String(log)

  var logs = []
  var result

  while (result = log.match(/ERROR\:([^\n]+)/)) {
    log = log.slice(result.index + 1)

    var line = result[1].trim()
    var seps = line.split(':')
    var emsg = seps.slice(2).join(':').trim()
    var line = parseInt(seps[0], 10)
    var col  = parseInt(seps[1], 10)

    logs.push({
        message: emsg
      , column: col
      , line: line
    })
  }

  return logs
}

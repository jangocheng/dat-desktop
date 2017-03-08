const test = require('tape')
const windowModel = require('../models/window')
const reposModel = require('../models/repos')

test('dat-desktop', t => {
  t.ok(true, 'dummy test')
  t.end()
})

test.onFinish(() => {
  // fix this in tape
  process.exit()
})


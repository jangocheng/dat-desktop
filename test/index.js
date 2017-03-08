const test = require('tape')

const errorModel = require('../models/error')
const mainViewModel = require('../models/main-view')
const reposModel = require('../models/repos')
const windowModel = require('../models/window')

test('dat-desktop', t => {
  t.ok(true, 'dummy test')
  t.end()
})

test.onFinish(() => {
  // fix this in tape
  process.exit()
})


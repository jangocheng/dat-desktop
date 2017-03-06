const test = require('tape')

test('dat-desktop', t => {
  t.ok(true, 'dummy test')
  t.end()
})

test.onFinish(() => {
  // fix this in tape
  process.exit()
})


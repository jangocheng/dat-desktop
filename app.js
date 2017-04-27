const persist = require('choo-persist')
const expose = require('choo-expose')
const log = require('choo-log')
const css = require('sheetify')
const choo = require('choo')
const xtend = Object.assign

require('./lib/monkeypatch')

var welcomeView = require('./views/welcome')
var mainView = require('./views/main')

css('dat-colors')
css('tachyons')
css('./assets/base.css')

const app = choo()

app.use(persist({
  filter: function (state) {
    return xtend({}, state, { dats: {} })
  }
}))

if (process.env.NODE_ENV === 'development') {
  app.use(log())
  app.use(expose())
}

app.use(require('./models/welcome'))
app.use(require('./models/drag-drop'))
app.use(require('./models/dats'))
app.use(require('./models/error'))

app.route('/', function (state, emit) {
  if (state.welcome.show) return welcomeView(state, emit)
  else return mainView(state, emit)
})

app.mount('body div')

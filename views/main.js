'use strict'

const html = require('choo/html')

const Header = require('../elements/header')
const sprite = require('../elements/sprite')
const Table = require('../elements/table')
const Empty = require('../elements/empty')

module.exports = mainView

// render the main view
// (obj, obj, fn) -> html
function mainView (state, emit) {
  const dats = state.dats.values
  const isReady = state.dats.ready

  const header = Header({
    isReady: isReady,
    oncreate: () => emit('dats:create'),
    onimport: (link) => emit('dats:clone', link)
  })

  document.title = 'Dat Desktop'
  var mainEl = dats.length ? Table(state, emit) : Empty()

  return html`
    <div>
      ${sprite()}
      ${header}
      ${mainEl}
    </div>
  `
}

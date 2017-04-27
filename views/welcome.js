var html = require('choo/html')
var css = require('sheetify')

var sprite = require('../elements/sprite')
var button = require('../elements/button')

const welcome = css`
  :host {
    height: 100vh;
    background-color: var(--color-neutral);
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    -webkit-app-region: drag;
  }
`

module.exports = WelcomeScreen

function WelcomeScreen (state, emit) {
  document.title = 'Dat Desktop | Welcome'
  return html`
    <div>
      ${sprite()}
      <main class="${welcome}" onload=${onload}>
        <img src="assets/logo-dat-desktop.svg" alt="">
        <p class="mv4">
          Share data on the distributed web.
        </p>
        ${button.green('Get Started', { onclick: onexit })}
      </main>
    </div>
  `

  function onexit () {
    window.removeEventListener('keydown', captureKeyEvent)
    emit('welcome:hide')
  }

  function onload () {
    window.addEventListener('keydown', captureKeyEvent)
  }

  function captureKeyEvent (e) {
    const key = e.code
    if (key === 'Enter' || key === 'Space') {
      window.removeEventListener('keydown', captureKeyEvent)
      emit('welcome:hide')
    }
  }
}

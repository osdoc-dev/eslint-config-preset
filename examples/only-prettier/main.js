import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

const a = '123123123123123123123123123123123123123'

function test() {
  if (a) {
    console.log('a', a)
  }
}

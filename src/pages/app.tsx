import { h, Fragment } from 'preact'

const App = () => (
  <>
    <h1>Hello really simple Preact app!</h1>
    <button onClick={() => alert('Hello back!')}>Say Hi 👋🏻</button>
  </>
)

export default App

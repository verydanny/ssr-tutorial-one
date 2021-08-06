import { h, hydrate } from 'preact'
import App from '../pages/app'

hydrate(<App/>, document.getElementById('app')!)

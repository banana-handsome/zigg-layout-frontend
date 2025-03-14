import { mount } from 'svelte'
import './resources/css/global.css'
import App from './app/routes.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app

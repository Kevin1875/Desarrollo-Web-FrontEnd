import { createApp } from 'vue'
import App from './App.vue'
import Nav from './components/navBar.vue'
import mainMenu from './components/mainMenu.vue'

import './assets/main.css'


const app = createApp(App)

//agregamiento de componentes
app.component('navBar', Nav);
app.component('mainMenu', mainMenu);

//lanzamiento de la app
app.mount('#app')


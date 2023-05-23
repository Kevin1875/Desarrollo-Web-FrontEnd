import { createApp } from 'vue'
import App from './App.vue'
import Nav from './components/navBar.vue'
import mainMenu from './components/mainMenu.vue'

// import simpleSearch from './components/simpleSearch.vue'
// import advanceSearch from './components/advancedSearch.vue'

import './assets/main.css'


const app = createApp(App)

//agregamiento de componentes
app.component('navBar', Nav);
app.component('mainMenu', mainMenu);
// app.component('simple', simpleSearch);
// app.component('advance', advanceSearch);

//lanzamiento de la app
app.mount('#app')


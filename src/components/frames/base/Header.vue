<script setup>
import { ref, onMounted } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
import axios from 'axios'

const store = useStore();
const id = computed(() => store.state.id);
const idName = ref(null);
const isAdmin = ref(false);

const nombre = ref("Carlos");
const mostrarMenu = ref(false);
const text = ref(nombre.value);

function changeText() {
  text.value = "Cerrar Sesión";
}
function resetText() {
  text.value = nombre.value;
}

onMounted(() => {
    //llama el nombre del usuario con el id logeado
  axios
    .get("http://localhost:3000/api/v1/users/"+id.value)
    .then((response) => {
      idName.value = response.data.data.name;
    })
    .catch((error) => {
      // Manejo de errores en caso de que la solicitud falle
      console.error(error);
    });


  //verifica si es admin para mostrar el boton admin
  axios
    .get("http://localhost:3000/api/v1/collegiateBodies")
    .then((response) => {
      // Lógica para manejar la respuesta de la API
      const resultados = response.data.data
      for (let admin in resultados){
        const lista_admins = resultados[admin].admins;
        for (let i = 0; i <lista_admins.length; i++){
          if (id.value === lista_admins[i]._id){
            isAdmin.value = true;
            break;
          }
        }
      }
      
    })
    .catch((error) => {
      // Manejo de errores en caso de que la solicitud falle
      console.error(error);
    });
});

let varLogin = ref("Login");
let isScroll = ref(true);

function header() {
  if (isScroll.value) {
    return { headerr: true, headerr2: false };
  } else {
    return { headerr: false, headerr2: true };
  }
}

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 0) {
    isScroll.value = false;
  } else {
    isScroll.value = true;
  }
});
</script>

<template>
  <header :class="header()">
    <div class="log" href="https://unal.edu.co/">
      <a href="https://unal.edu.co/"
        ><img src="../../icons/logoun.svg" alt="xd" class="logo-un"
      /></a>
    </div>
    <nav class="nav">
      <ul class="ul">
        <li class="li"><a href="/">Inicio</a></li>
        <li v-if="id != null" class="li">
          <a href="/misdocumentos">Mis Documentos</a>
        </li>
        <li v-if="isAdmin" class="li"><a href="/adminpanel">Administrar</a></li>
        <li v-if="id != null" class="li"><a href="/adminpanel">Ajustes</a></li>
      </ul>
    </nav>
    <!--
            <div class="login"><div class="bt-login"><a @:click="clickcito">{{ varLogin }}</a> </div></div>
        -->

    <div
      v-if="id"
      class="profile"
      @mouseover="changeText"
      @mouseleave="resetText"
    >
      {{ idName }}
    </div>
    <!--
      <span class="material-symbols-outlined" style="margin-right: 10px">
        person
      </span>
      -->
    <div v-else>
      <div class="login">
        <div class="bt-login">
          <a href="/login" @click="loginAction">Login</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
}
.profile {
  border-radius: 20px;
  height: fit-content;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.profile:hover {
  background-color: white;
  color: #031448;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
}

.headerr {
  color: #ffffff;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 5%;
  position: fixed;
  z-index: 9999;
  transition: all 0.7s ease;
}

.headerr2 {
  color: white;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 5%;
  position: fixed;
  background-color: #212121;
  z-index: 9999;
  transition: all 0.7s ease;
}

.log {
  display: flex;
  align-items: center;
}

.log .logo-un {
  width: 60px;
  height: 30px;
  display: flex;
}

.nav {
  width: fit-content;
}

.nav .ul {
  display: flex;
  padding: 0;
  text-align: center;
}

.nav .ul .li {
  display: inline-block;
  padding: 10px;
}

li a {
  text-decoration: none;
  color: inherit;
  transition: all 0.5s ease;
}

li a:hover {
  padding: 5px 10px;
  background-color: #ffffff;
  color: black;
  border-radius: 15px;
}

.login .bt-login a {
  text-decoration: none;
  color: inherit;
  transition: all 0.5s ease;
  cursor: pointer;
}
.bt-login a:hover {
  padding: 0px 6px;
  background-color: #ffffff;
  color: black;
  border-radius: 15px;
}

.login {
  padding: 10px;
  float: right;
}
.bt-login {
  align-items: center;
  border-radius: 15px;
  padding: 0px 5px;
  background-color: #ffffff;
  color: #031448;
  font-weight: 800;
}

.hide {
  display: none;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { computed } from 'vue';
import { useStore } from 'vuex';
import router from '../../../router';
import comp from './comp.vue';


const store = useStore()
const message = ref(null);
const email = ref(null);
const password = ref(null);
const contador = computed(() => store.state.id);

const incorrect = ref(null)

function sendform() {
  sendRequest();
}

const send_id = (id) => {
  store.commit('send_id', id);
};

function sendRequest() {
  axios
    .post("http://localhost:3000/api/v1/auth", {
      email: email.value,
      password: password.value,
    })
    .then((response) => {
      console.log(response.data.message)
      if (response.data.message === 'Ok'){
        window.location.href = '/';
        ///send_id(1234);
        //console.log('el nuevo id es: ',computed(() => store.state.id).value);
      }
      console.log("Logeado mi rey");
      console.log(response.data);
    })
    .catch((error) => {
      console.log("Fail 😵‍💫");
      incorrect.value = true;
      //message.value = error.response.data.message;
      //console.error(error.response.data.message);
      // Maneja el error en caso de que la solicitud falle
    });
}

console.log(contador.value)




</script>
<template>
  <div class="full">
    <div v-if="incorrect === true" class="incorrect_pass">
      contraseña incorrecta
    </div>
    <div class="main-login">
      <h5>{{ message }}</h5>
      <h5 class="titulo">INICIA SESIÓN</h5>
      <img src="../../../assets/login.jpg" alt="">
      <div class="image-login"></div>
      <form @submit.prevent="sendform">
        <div class="object-m-l">
          <label for="mail">Correo:</label>
          <input
            v-model="email"
            type="text"
            placeholder="Ingresa tu correo"
            id="mail"
          />
        </div>
  
        <div div class="object-m-l">
          <label for="pass">Contraseña:</label>
          <input
            v-model="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            id="pass"
          />
        </div>
        <div class="buttons-div">
          <button type="submit">Entrar</button>
        </div>
        <a href="" style="padding-left: 30px;">¿Deseas registrarte? 🤓</a>
      </form>
    </div>
    <div>
      <comp/>
    </div>
  </div>
</template>



<style scoped>
template{
  height: fit-content;
}

.incorrect_pass{
  height: 30px;
  background-color: rgb(184, 44, 44);
  justify-content: center;
  align-items: center;
  width: 350px;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: -5px;
  color: rgb(255, 217, 217);
  text-align: center;
  font-weight: bold;
}

.main-login {
  background-color: rgb(255, 255, 255);
  width: 350px;
  height: 500px;
  color: black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.object-m-l {
  padding: 0px 30px 10px 30px;
  display: flex;
  align-items: left;
  flex-direction: column;
}

.object-m-l label {
  margin-bottom: 0;
  font-size: small;
  font-weight: 600;
  color: rgb(99, 99, 99);
}

.full{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

form input {
  background-color: white;
  border-radius: 5px;
  border: 2px solid gray;
  height: 35px;
  padding: 10px;
  transition: all 0.7s ease;
}

form input:focus {
  border: 2px solid deepskyblue;
  outline: none;
}

button {
  border: 2px solid rgb(187, 187, 187);
  background-color: rgb(187, 187, 187);
  border-radius: 5px;
  color: black;
  font-size: medium;
  font-weight: 400;
}

.buttons-div {
  padding: 10px 30px 10px 30px;
  display: flex;
  justify-content: space-between;
}

.titulo {
  text-align: center;
  font-weight: bolder;
  color: rgb(63, 63, 63);
}

</style>

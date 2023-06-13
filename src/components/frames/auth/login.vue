<script setup>
import { ref } from "vue";
import axios from "axios";


const message = ref(null)
const email = ref(null);
const password = ref(null);

function sendform() {
  sendRequest();
}


function sendRequest() {
  axios
    .post("http://localhost:3000/api/v1/auth", {
      email: email.value,
      password: password.value,
    })
    .then((response) => {
      console.log("Logeado mi rey");
      console.log(response.data);
    })
    .catch((error) => {
      console.log("Fail 😵‍💫");
      message.value = error.response.data.message;
      //console.error(error.response.data.message);
      // Maneja el error en caso de que la solicitud falle
    });
}



</script>
<template>
  <div class="main-login">
    <h5>{{message}}</h5>
    <form @submit.prevent="sendform">
      <div class="object-m-l">
        <label for="mail">Correo:</label>
        <input v-model="email" type="text" placeholder="ingrese correo" id="mail"/>
      </div>

      <div div class="object-m-l">
        <label for="pass">Contraseña:</label>
        <input
          v-model="password"
          type="password"
          placeholder="ingrese contraseña"
          id="pass"
        />
      </div>

      <button type="submit">Entrar</button>
      <button type="submit">registrarse</button>
      <a href="">olvidé la ijueputa contraseña</a>
    </form>
  </div>
</template>

<style scoped>
.main-login {
  background-color: rgba(255, 255, 255, 0.068);
  width: 300px;
  height: 500px;
  color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.object-m-l {
  background-color: rgba(165, 42, 42, 0.247);
  padding: 10px 30px;
  display: flex;
  align-items: left;
  flex-direction: column;
}
</style>

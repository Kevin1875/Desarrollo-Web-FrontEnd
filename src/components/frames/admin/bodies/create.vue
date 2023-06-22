<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const nombre = ref(null);
const correo = ref(null);
const contraseña = ref(null);
const contraseña_confirmada = ref(null);
const correos_admin = ref([{ valor: "" }]);
const lista_ca = ref([null]);
const id_admins = ref([]);
const pref = ref([]);
let pref2 = [];

const selectedFileName = ref("Selecciona el documento");

//FUNCIONES

function handleFileChange(event) {
  document.value = event.target.files[0];
}

function submitForm() {
  let lista = [];
  for (var i = 0; i < preferencias.value.length; i++) {
    lista.push(preferencias.value[i].valor);
  }
  pref2 = lista;
  //AQUI PODEMOS USAR LOS VALIDADORES
  sentDocument();
}

function getUsers() {
  lista_ca.value = Object.values(correos_admin.value.map(({ valor }) => valor));
  axios
    .get("http://localhost:3000/api/v1/users")
    .then((response) => {
      console.log(response.data.data)
      for (let i = 0; i < response.data.data.length; i++) {
        console.log("-");
        for (let j = 0; j < lista_ca.value.length; j++) {
          if (response.data.data[i].email === lista_ca.value[j]) {
            id_admins.value.push(response.data.data[i]._id);
          }
        }
      }
      sentDocument();
    })
    .catch((error) => {
      // Maneja el error aquí
      console.error(error);
    });
}

function sentDocument() {
  const idList = Object.values(id_admins.value);

  axios
    .post("http://localhost:3000/api/v1/collegiateBodies", {
      name: nombre.value,
      admins: idList,
    })
    .then((response) => {
      console.log("Melo");
      console.log(response.data);
    })
    .catch((error) => {
      console.log("Fail 😵‍💫");
      console.error(error);
      // Maneja el error en caso de que la solicitud falle
    });
}

function agregarPreferencia() {
  correos_admin.value.push({ valor: "" });
}

function eliminarPreferencia(index) {
  correos_admin.value.splice(index, 1);
}
</script>

<template>
  <div class="main-cr">
    <div class="top-cr">
      <div class="tittle-cr">
        <h6>PANEL ADMINISTRACIÓN</h6>
      </div>
      <div class="subtittle-cr">
        <h3>GESTIÓN DE CUERPOS COLEGIADOS</h3>
        <div class="status">CREAR</div>
        <a href="/adminpanel/collegebody">
          <span class="material-symbols-outlined btn"> chevron_left </span>
        </a>
      </div>
    </div>

    <div style="margin-top: 50px">
      <form @submit.prevent="getUsers">
        <div class="main-form">
          <div class="cont-1">
            <label>Nombre del Cuerpo Colegiado: </label>
            <input
              type="text"
              v-model="nombre"
              placeholder="Ingrese el nombre"
              class="input_title"
            />

            <div>
              <label>Agrega el correo de los administradores:</label>
              <div
                v-for="(correo, index) in correos_admin"
                :key="index"
                class="pref-class"
              >
                <input
                  type="email"
                  v-model="correo.valor"
                  placeholder="Ingrese el correo"
                />
                <button
                  @click="eliminarPreferencia(index)"
                  class="del-preff-class"
                  type="button"
                >
                  x
                </button>
              </div>
              <button
                type="button"
                @click="agregarPreferencia"
                class="agg-preff-class"
              >
                +
              </button>
            </div>

            <input type="submit" value="Crear" class="btn-submit" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.btn-submit {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border: none;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  outline: solid 2px gray;
  background-color: rgba(255, 255, 255, 0.15);
  transition: all 0.7s ease;
}

.btn-submit:hover {
  width: 102%;
  height: 50px;
  border: none;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  outline: solid 2px rgb(18, 155, 209);
  background-color: #223a73;
}
.cont-1 {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  padding: 20px;
  width: 500px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 30px 10 0 10;
  justify-content: center;
  transition: all 0.7s ease;
}

.cont-1 .input_title {
  width: 100%;
  border: 2px solid;
  border-color: gray;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  transition: all 0.7s ease;
  height: 40px;
  padding-left: 20px;
  margin-top: -5px;
  margin-bottom: 20px;
}
.cont-1 .input_title:hover {
  outline: none;
  border: 2px solid;
  border-color: deepskyblue;
}
.cont-1 .input_title:focus {
  outline: none;
  border: 2px solid;
  border-color: deepskyblue;
}
.cont-1 .input_title::placeholder {
  font-weight: 500;
}

.main-form {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.top-cr {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.main-cr {
  color: aliceblue;
}
.tittle-cr h6 {
  font-weight: 500;
  margin: 0;
}

.subtittle-cr {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 40px;
}
.subtittle-cr h3 {
  font-weight: 700;
  margin: 0;
}

.subtittle-cr .status {
  font-weight: 800;
  font-size: 25px;
  border-radius: 50px;
  color: aliceblue;
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
  color: inherit;
}

/* ESTILO DE FLECHA ATRAS */
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 700, "GRAD" 0, "opsz" 48;
  color: rgb(22, 22, 22);
  height: 30px;
  width: 30px;
  background-color: aliceblue;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
}
.material-symbols-outlined:hover {
  height: 33px;
  width: 33px;
}

.pref-class {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  align-items: center;
}

.pref-class input {
  width: 200px;
  border: 2px solid;
  border-color: gray;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  transition: all 0.7s ease;
  height: 40px;
  padding-left: 20px;
}

.pref-class input:hover {
  outline: none;
  border: 2px solid;
  border-color: deepskyblue;
}

.pref-class input:focus {
  outline: none;
  border: 2px solid;
  border-color: deepskyblue;
}

.pref-class input::placeholder {
  font-weight: 500;
}

.del-preff-class {
  margin-left: 10px;
  border-radius: 50px;
  width: 25px;
  height: 25px;
  font-weight: bolder;
  font-size: 10px;
  color: rgb(199, 199, 199);
  border: none;
  outline: solid 2px gray;
  background-color: transparent;
  transition: all 0.7s ease;
}

.del-preff-class:hover {
  color: rgb(199, 199, 199);
  border: none;
  outline: solid 2px deepskyblue;
  background-color: #223a73;
}

.agg-preff-class {
  background-color: #223a73;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border: transparent;
  outline: solid 1px gray;
  border-radius: 100px;
  color: white;
  transition: all 0.3s ease;
}

.agg-preff-class:hover {
  outline: solid 1px deepskyblue;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const nombre = ref(null);
const correo = ref(null);
const contraseña = ref(null);
const contraseña_confirmada = ref(null);
const preferencias = ref([{ valor: "" }, { valor: "" }, { valor: "" }]);
const pref = ref([]);
let pref2 = [];
const succes =  ref(true);

const selectedFileName = ref("Selecciona el documento");
const title = ref(null);
const authorities = ref([]);
const documentType = ref(null);

const pub_date = ref(null);
const exp_date = ref(null);
const entry_date = ref(null);

const pub_date_formated = ref(null);
const exp_date_formated = ref(null);
const entry_date_formated = ref(null);

const fileInput = ref(null);

const tipoDocumentos = [
  { value: 1, label: "Acuerdo" },
  { value: 1, label: "Circular" },
  { value: 1, label: "Circular Conjunta" },
  { value: 1, label: "Concepto" },
  { value: 1, label: "Convención Colectiva" },
  { value: 1, label: "Decreto" },
  { value: 1, label: "Documento de Relatoría" },
  { value: 1, label: "Instructivo" },
  { value: 1, label: "Ley" },
  { value: 1, label: "Linea Jurisprudencial" },
  { value: 1, label: "Nota" },
  { value: 1, label: "Resolución" },
  { value: 1, label: "Sentencia" },
];

const cuerposColegiados = [
  {
    value: 1,
    label: "Comisión Delegataria del Consejo Superior Universitario",
  },
  { value: 1, label: "Comisión Nacional de Carrera Administrativa" },
  { value: 1, label: "Comité Académico Administrativo Sede Bogotá" },
  { value: 1, label: "Comité Académico Administrativo Sede Manizales" },
  { value: 1, label: "Comité Académico Administrativo Sede Medellín" },
];

//FUNCIONES

function enviarDatos() {
  // Obtener los valores seleccionados de los selects
  var tipoDocumento = document.getElementById("documentType").value;
  var autoridadFirma = document.getElementById("autoritySignature").value;

  // Obtener el valor del campo de texto
  var comentarios = document.getElementById("comments").value;

  // Crear el objeto con los datos recopilados
  var datos = {
    tipoDocumento: tipoDocumento,
    autoridadFirma: autoridadFirma,
    comentarios: comentarios,
  };

  // Mostrar el objeto en la consola (para verificar)
  console.log(datos);

  // Aquí puedes hacer lo que desees con el objeto de datos, como enviarlo a un servidor o procesarlo de alguna manera.
}
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

function sentDocument() {
  axios
    .post("http://localhost:3000/api/v1/users", {
      name: nombre.value,
      email: correo.value,
      password: contraseña.value,
      preferences: pref2,
    })
    .then((response) => {
      if(!response.data.error){
        succes.value = true;
      }else{
        succes.value = false;
      }
      console.log(response.data);
    })
    .catch((error) => {
      console.log("Fail 😵‍💫");
      console.error(error);
      // Maneja el error en caso de que la solicitud falle
    });
}

function handleButtonClick() {
  fileInput.value.click();
}
function handleFileSelect(event) {
  //const file = event.target.files[0];
  //this.selectedFileName = file ? file.name : null;

  document.value = event.target.files[0];
  selectedFileName.value = document.value ? document.value.name : "pglo";
  console.log(selectedFileName.value);
  // Aquí puedes hacer algo con el archivo seleccionado
}

function agregarPreferencia() {
  preferencias.value.push({ valor: "" });
}

function eliminarPreferencia(index) {
  preferencias.value.splice(index, 1);
}
</script>

<template>
  <div class="main-cr">
    <div style="margin-top: 50px">
      <form @submit.prevent="submitForm">
        <div class="main-form" v-if="succes === null">
          <div class="cont-1">
            <div class="titulog">
              <h5>REGISTRATE</h5>
            </div>
            <label>Nombre completo: </label>
            <input
              type="text"
              v-model="nombre"
              placeholder="Ingrese el nombre"
              class="input_title"
            />

            <label>Correo: </label>
            <input
              type="text"
              v-model="correo"
              placeholder="Ingrese el correo"
              class="input_title"
            />

            <label>Contraseña: </label>
            <input
              type="password"
              v-model="contraseña"
              placeholder="Ingrese tu contraseña"
              class="input_title"
            />

            <label>Confirmar contraseña: </label>
            <input
              type="password"
              v-model="contraseña_confirmada"
              placeholder="Ingrese tu contraseña"
              class="input_title"
            />

            <div>
              <label>Preferencias:</label>
              <div
                v-for="(preferencia, index) in preferencias"
                :key="index"
                class="pref-class"
              >
                <input
                  type="text"
                  v-model="preferencia.valor"
                  placeholder="ingrese su preferencia"
                />
                <button
                  @click="eliminarPreferencia(index)"
                  class="del-preff-class"
                >
                  x
                </button>
              </div>
              <button @click="agregarPreferencia" class="agg-preff-class">
                +
              </button>
            </div>

            <input type="submit" value="Enviar" class="btn-submit" />
          </div>
        </div>
        <div v-if="succes" class="sucess">
                <h1>Usuario registrado 🫡</h1>
                <a href="/login">ya puedes logearte</a>
        </div>

      </form>
    </div>
  </div>
</template>

<style scoped>
.sucess{
    background-color: rgba(240, 248, 255, 0.082);
    display: flex;
    flex-direction: column;
    width:  400px;
    height: 200px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    color: rgb(35, 202, 35);
}
.sucess a{
    color: white;
    border: solid 2px rgb(18, 89, 196);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
}

.titulog{
    border-radius: 10px;
    display: flex;
    height: 40px;
    color: deepskyblue;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: #091941;
    margin: 0 0 20px 0;
}
.titulog h5{
    margin: 0;
}
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
  width: 400px;
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
  margin-top: -50px;
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

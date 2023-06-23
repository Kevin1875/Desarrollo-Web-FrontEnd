<script setup>
import { ref } from "vue";
import axios from "axios";

const document = ref(null);
const title = ref(null);
const authorities = ref([]);
const documentType = ref(null);

const pub_date = ref(null);
const exp_date = ref(null);
const entry_date = ref(null);

const pub_date_formated = ref(null);
const exp_date_formated = ref(null);
const entry_date_formated = ref(null);

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
  //console.log(document.value);
  //console.log(title.value);
  //console.log(authorities.value);
  pub_date_formated.value = formatDate(pub_date.value);
  exp_date_formated.value = formatDate(exp_date.value);
  entry_date_formated.value = formatDate(entry_date.value);

  sentDocument();
}

function formatDate(value) {
  if (!value) return ""; // Si no hay fecha, mostrar campo vacío

  const date = new Date(value);
  const day = date.getDate().toString().padStart(2, "0"); // Obtener día y asegurar dos dígitos
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Obtener mes y asegurar dos dígitos
  const year = date.getFullYear().toString(); // Obtener año

  return `${day}/${month}/${year}`;
}

function sentDocument() {
  const formData = new FormData();
  formData.append("Doc", document.value);
  formData.append("title", title.value);
  formData.append("type", documentType.value);
  formData.append("collegiateBodies", "646ea36596524cfb4275f924");
  formData.append("publicationDate", pub_date_formated.value);
  formData.append("entryIntoForce", exp_date_formated.value);
  formData.append("expeditionDate", entry_date_formated.value);

  axios
    .post("http://localhost:3000/api/v1/document", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Importante: establece el encabezado 'Content-Type' como 'multipart/form-data'
      },
    })
    .then((response) => {
      console.log("Melo");

      console.log(response.data);
      // Realiza las acciones necesarias con la respuesta del servidor
    })
    .catch((error) => {
      console.log("Melont");
      console.error(error);
      // Maneja el error en caso de que la solicitud falle
    });
}
</script>

<template>
  <div class="main-cr">
    <div class="top-cr">
      <div class="tittle-cr">
        <h6>PANEL ADMINISTRACIÓN</h6>
      </div>
      <div class="subtittle-cr">
        <h3>GESTIÓN DE PUBLICACIONES</h3>
        <div class="status">CREAR PUBLICACIÓN</div>
        <a href="/adminpanel/publication">
          <span class="material-symbols-outlined btn"> chevron_left </span>
        </a>
      </div>
    </div>

    <div>
      <form @submit.prevent="submitForm">
        <input
          @change="handleFileChange"
          type="file"
          ref="fileInput"
          multiple="false"
        />
        <label for="documentType">Título del documento: </label>
        <input type="text" v-model="title" placeholder="Ingrese el título" />

        <label for="documentType">Tipo de documento: </label>
        <select
          class="sle"
          v-model="documentType"
          id="documentType"
          name="pais"
        >
          <option v-for="option in tipoDocumentos" :value="option.value">
            {{ option.label }}
          </option>
        </select>

        <div>
          <label for="option1">
            <input
              v-model="authorities"
              type="checkbox"
              id="option1"
              name="options"
              value="646ea36596524cfb4275f924"
            />
            Consejo De Paros
          </label>
          <br />
          <label for="option2">
            <input
              v-model="authorities"
              type="checkbox"
              id="option2"
              name="options"
              value="646eb620be39ca3f71662ab3"
            />
            Consejo De Minaas
          </label>
        </div>

        <div>
          <label for="fecha">Selecciona fecha de publicación:</label>
          <input v-model="pub_date" type="date" id="fecha" name="fecha" />

          <label for="fecha">Selecciona fecha de expedición:</label>
          <input v-model="exp_date" type="date" id="fecha" name="fecha" />

          <label for="fecha">Selecciona fecha de entrada en vigencia:</label>
          <input v-model="entry_date" type="date" id="fecha" name="fecha" />
        </div>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.comment-cr textarea {
  background-color: #223a73;
  border: none;
  min-height: 100px;
  width: 100%;
  border-radius: 10px;
  color: white;
  transition: all 0.3s ease;
  border: solid 2px gray;
  min-height: 200px;
}

.comment-cr textarea:focus {
  border: solid 2px rgb(151, 151, 151);
  min-height: 100px;
  width: 100%;
  outline: none;
  min-height: 200px;
}

.comment-cr label {
  font-weight: 400;
  font-size: 15px;
  padding-left: 10px;
  margin: 0;
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

.subtittle-cr .btn-atras {
  height: 35px;
  width: 35px;
  background-color: aliceblue;
  border-radius: 50px;
}

.form-cr {
  max-width: 700px;
  background-color: rgba(255, 255, 255, 0.075);
  margin: 20px 0;
  padding: 20px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
}

.docview-cr {
  height: 100vh;
  width: 100%;
  background-color: rgb(24, 43, 95);
}

.comments-cr {
  height: 100px;
  background-color: aquamarine;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
  color: inherit;
}

/*ESTILOS FORM TIPO DE DOCUMENTO */
.formComponent {
  padding: 5px 0;
  display: flex;
  flex-direction: column;
}

.formComponent label {
  font-weight: 400;
  font-size: 15px;
  padding-left: 10px;
  margin: 0;
}

.formComponent input {
  width: 100%;
  border: 2px solid;
  border-color: gray;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  transition: all 0.7s ease;
  height: 40px;
  padding-left: 20px;
}

.formComponent input:hover {
  outline: none;
  border: 2px solid;
  border-color: deepskyblue;
}

.formComponent input:focus {
  outline: none;
  border: 2px solid;
  border-color: deepskyblue;
}

.formComponent input::placeholder {
  font-weight: 500;
}

.sle {
  background-color: #223a73;
  color: white;
  transition: all 2s ease;
  height: 40px;
  border-radius: 10px;
  border: 2px solid;
  border-color: gray;
}

.sle:focus {
  background-color: #223a73;
  color: white;
  border: 2px solid;
  border-color: gray;
  outline: none;
}

.sle:focus-visible {
  background-color: #223a73;
  color: white;
  border: 2px solid;
  border-color: gray;
  outline: none;
  border-color: deepskyblue;
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
</style>

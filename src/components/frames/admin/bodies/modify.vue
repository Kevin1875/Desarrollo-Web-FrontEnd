<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { fill } from "pdf-lib";

const store = useStore();
const id = computed(() => store.state.id);
const name_authorities = ref([]);
const nombre = ref(null);
const correo = ref(null);
const contraseña = ref(null);
const contraseña_confirmada = ref(null);
const show_updater = ref(false);
const show_notfoundmail = ref(false);
const preferencias = ref([]);
const succes_send = ref(false);
const full = ref([{}]);

const picked = ref();

const selectedFileName = ref("Selecciona el documento");
const title = ref(null);

const id_authorities = ref([]);
const documentType = ref(null);

const pub_date = ref(null);
const exp_date = ref(null);
const entry_date = ref(null);

const pub_date_formated = ref(null);
const exp_date_formated = ref(null);
const entry_date_formated = ref(null);

const fileInput = ref(null);

const prueba = ref();
const lista_final_ids = ref([]);
//FUNCIONES

onMounted(() => {
  //verifica si es admin para mostrar el boton admin
  axios
    .get("http://localhost:3000/api/v1/collegiateBodies")
    .then((response) => {
      // Lógica para manejar la respuesta de la API
      const resultados = response.data.data;
      for (let admin in resultados) {
        const lista_admins = resultados[admin].admins;
        for (let i = 0; i < lista_admins.length; i++) {
          if (id.value === lista_admins[i]._id) {
            id_authorities.value.push(resultados[admin]._id);
            enviarNombre(resultados[admin]._id);
          }
        }
      }
      full.value.shift();
    })
    .catch((error) => {
      // Manejo de errores en caso de que la solicitud falle
      console.error(error);
    });
});

async function enviarDatos() {
  for (let i = 0; i < preferencias.value.length; i++) {
    await llamarID(preferencias.value[i].valor);
  }
  console.log(lista_final_ids.value);
  const finales = Array.from(lista_final_ids.value);
  const url = "http://localhost:3000/api/v1/collegiateBodies/" + picked.value;
  console.log(finales);

  axios
    .patch(url, { admins: finales })
    .then((response) => {
      console.log("Solicitud PATCH exitosa");
      succes_send.value = true;
    })
    .catch((error) => {
      console.error("Error en la solicitud PATCH");
      console.error(error);
    });
}

async function llamarID(correo) {
  const url = "http://localhost:3000/api/v1/users?email="+correo;
  await axios
    .get(url)
    .then((response) => {
      const resultados = response.data.data;
      lista_final_ids.value.push(resultados[0]._id);
    })
    .catch((error) => {
      console.error(error);
    });
}

function enviarNombre(id) {
  const url = "http://localhost:3000/api/v1/collegiateBodies/" + id;
  axios
    .get(url)
    .then((response) => {
      //name_authorities.value.push(response.data.data.name);
      full.value.push({
        id: id,
        name: response.data.data.name,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

function handleFileChange(event) {
  document.value = event.target.files[0];
}

function buscarCuerpo() {
  getUser();
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

  axios;
  axios
    .post("localhost:3000/api/v1/users", {
      name: nombre.value,
      email: correo.value,
      password: contraseña.value,
      preferences: contraseña_confirmada.value,
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

const idCorrespondiente = ref(null);
const id_final = ref(null);
const correo_pre = ref(null);

function getCollegeBodies() {
  axios
    .get("http://localhost:3000/api/v1/users")
    .then((response) => {
      console.log(response.data.data);
      for (let i = 0; i < response.data.data.length; i++) {
        if (response.data.data[i].email === correo_pre.value) {
          idCorrespondiente.value = response.data.data[i]._id;
          nombre.value = response.data.data[i].name;
          correo.value = response.data.data[i].email;

          preferencias.value = response.data.data[i].preferences.map(
            (valor) => {
              return { valor };
            }
          );
          show_notfoundmail.value = false;
          break; // Detener la búsqueda una vez encontrado el correo
        }
      }
      if (idCorrespondiente.value != null) {
        id_final.value = idCorrespondiente.value;
        idCorrespondiente.value = null;
        show_updater.value = true;
      } else {
        show_notfoundmail.value = true;

        show_updater.value = false;
        console.log("no se encontró un usuario asociado al correo");
      }
    })
    .catch((error) => {
      // Maneja el error aquí
      console.error(error);
    });
}
const buscado = ref(null);

function getUser() {
  axios
    .get("http://localhost:3000/api/v1/collegiateBodies/" + picked.value)
    .then((response) => {
      buscado.value = true;
      const admins = response.data.data.admins;
      console.log(admins.length);

      for (let i = 0; i < admins.length; i++) {
        preferencias.value.push({
          valor: admins[i].email,
          id: admins[i]._id,
        });
      }

      /*
      for (let i = 0; i < response.data.data.length; i++) {
        if (response.data.data[i].email === correo_pre.value) {
          idCorrespondiente.value = response.data.data[i]._id;
          nombre.value = response.data.data[i].name;
          correo.value = response.data.data[i].email;

          preferencias.value = response.data.data[i].preferences.map(
            (valor) => {
              return { valor };
            }
          );
          show_notfoundmail.value = false;
          break; // Detener la búsqueda una vez encontrado el correo
        }
      }
      if (idCorrespondiente.value != null) {
        id_final.value = idCorrespondiente.value;
        idCorrespondiente.value = null;
        show_updater.value = true;
      } else {
        show_notfoundmail.value = true;

        show_updater.value = false;
        console.log("no se encontró un usuario asociado al correo");
      }
      */
    })
    .catch((error) => {
      // Maneja el error aquí
      console.error(error);
    });
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
    <div class="top-cr">
      <div class="tittle-cr">
        <h6>PANEL ADMINISTRACIÓN</h6>
      </div>
      <div class="subtittle-cr">
        <h3>GESTIÓN DE CUERPOS COLEGIADOS</h3>
        <div class="status">MODIFICAR ADMINISTRADORES</div>
        <a href="/adminpanel/user">
          <span class="material-symbols-outlined btn"> chevron_left </span>
        </a>
      </div>
    </div>
    <div class="xda" style="margin-top: 50px">
      <div style="margin: 0px 30px 20px 30px">
        <Transition name="fade">
          <div v-if="show_notfoundmail" class="notfoundmail fade-div">
            <p>No se encontró un usuario asociado al email</p>
          </div>
        </Transition>

        <form @submit.prevent="buscarCuerpo">
          <div class="main-form">
            <div class="cont-1">
              <div>
                <div>Seleccione el cuerpo colegiado que va a modificar:</div>
                Picked: {{ picked }}
                <div v-for="cuerpo in full">
                  <input
                    type="radio"
                    :id="cuerpo.id"
                    :value="cuerpo.id"
                    v-model="picked"
                  />
                  <label :for="cuerpo.id">{{ cuerpo.name }}</label>
                </div>
              </div>
              <div style="width: 100%">
                <input type="submit" value="Buscar" class="btn-submit" />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div v-if="buscado">
        <form @submit.prevent="enviarDatos">
          <div class="main-form">
            <div class="cont-1">
              <div class="info">
                Correo: {{ correo }}
                <br />
                Nombre: {{ nombre }}
              </div>
              <div style="margin-bottom: 20px">
                <label>Administradores del cuerpo colegiado:</label>
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
                    type="button"
                    @click="eliminarPreferencia(index)"
                    class="del-preff-class"
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

              <input type="submit" value="Modificar" class="btn-submit" />
            </div>
          </div>
        </form>
        <div class="succesmodify" v-if="succes_send">
          se han modificado las preferencias 🫡
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.succesmodify {
  background-color: rgba(50, 205, 50, 0.452);
  color: white;
  margin-top: 10px;
  border-radius: 10px;
  padding: 5px 10px;
}
.notfoundmail {
  background-color: rgba(165, 42, 42, 0.678);
  color: white;
  border-radius: 10px 10px 0 0;
  margin-bottom: -15px;
  padding: 10px 0 10px 0;
  text-align: center;
}
.xda {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.info {
  background-color: rgb(0, 56, 78);
  display: flex;
  justify-content: left;
  border-radius: 10px;
  padding: 0 5px;
  margin-bottom: 10px;
}
.btn-submit {
  width: 80px;
  height: 30px;
  border: none;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  outline: solid 2px gray;
  background-color: rgba(255, 255, 255, 0.15);
  transition: all 0.7s ease;
}

.btn-submit:hover {
  border: none;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  outline: solid 2px rgb(18, 155, 209);
  background-color: #223a73;
}
.cont-1 {
  background-color: #284380;
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

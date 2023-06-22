<template>
  <div v-if="documento" class="main-doc">
    <div class="head">
      <h1 style="margin-bottom: 20px">{{ documento.title }}</h1>
      <div
        style="
          display: flex;
          flex-direction: row;
          margin-top: -15px;
          margin-bottom: 20px;
        "
      >
        <h7 style="">{{ documento.type }} de&nbsp; </h7>
        <h7>{{ authorities }}</h7>
      </div>
      <p>Fecha de expedición: {{ expeditionDate }}</p>
      <p>Fecha de entrada en vigencia: {{ entryIntoForce }}</p>
      <div class="guardado" @click="guardarDocumento">
        <span class="material-symbols-outlined"> save </span>
        <p v-if="is_saved" style="margin-left: 10px"> Documento Guardado</p>
        <p v-else style="margin-left: 10px">Guardar Documento</p>
      </div>
    </div>
    <div v-if="pdfFile" class="document">
      <embed
        :src="pdfFile"
        type="application/pdf"
        width="80%"
        height="1000px"
        name="Documento"
      />
    </div>
  </div>
  <div v-else class="pre-charge">
    <h6>Cargando datos...</h6>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

let id = useRoute().params.id;
const store = useStore();
const id_user = computed(() => store.state.id);
const is_saved = ref(false);

const guardarDocumento = () => {
  const url = 'http://localhost:3000/api/v1/users/saveDoc/'+id_user.value;
  console.log(url)
  if (!is_saved.value){
    axios
      .patch(url, { 
        doc: id,
        mode: "push"
      })
      .then((response) => {
        is_saved.value = true;
        console.log("Solicitud PATCH exitosa");
  
      })
      .catch((error) => {
        console.error("Error en la solicitud PATCH");
        console.error(error);
      });
  }
  else{
        axios
      .patch(url, { 
        doc: id,
        mode: "pull"

      })
      .then((response) => {
        is_saved.value = false;
        console.log("Solicitud PATCH exitosa");
  
      })
      .catch((error) => {
        console.error("Error en la solicitud PATCH");
        console.error(error);
      });
  }

};


const dom = "http://localhost:3000";

const URLdocument = dom + "/api/v1/document/" + id;

// Variable reactiva para almacenar los datos
const documento = ref(null);
let pdfFile = ref(null);
let authorities = ref("");
const expeditionDate = ref(null);
const entryIntoForce = ref(null);

// Llamada a la API para el documento
axios
  .get(URLdocument)
  .then((response) => {
    documento.value = response.data.data;
    const values = new Uint8Array(Array.from(documento.value.body.data));
    callAuthorities(Object.values(documento.value.collegiateBodies));
    createPDFFromBuffer(values);

    //fecha de expedición
    expeditionDate.value = new Date(
      documento.value.expeditionDate
    ).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    //fecha de entrada en vigencia
    entryIntoForce.value = new Date(
      documento.value.entryIntoForce
    ).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  })
  .catch((err) => {
    console.error(err);
  });

// Esperar a que data tenga un valor antes de mostrar el template
onMounted(() => {
  documento.value; // Acceder a data para forzar la reactividad

  //verifica si el documento esta guardado
  const url = "http://localhost:3000/api/v1/users/"+id_user.value;
  axios
    .get(url)
    .then((response) => {
      const documentos_guardados = response.data.data.saved
      for (let i = 0; i < documentos_guardados.length; i++){
        if (documentos_guardados[i] === id){
          is_saved.value = true;
          break;
        }
        else{
          is_saved.value = false;
        }
      }
    })
    .catch((error) => {
      // Manejo de errores en caso de que la solicitud falle
      console.error(error);
    });
});

// Función para crear el PDF
async function createPDFFromBuffer(buffer) {
  try {
    const blob = new Blob([buffer], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    pdfFile.value = url;
  } catch (error) {
    console.error("Error al crear el PDF:", error);
  }
}

//LLAMAR NOMBRE DE CUERPOS COLEGIADOS
async function callAuthorities(list) {
  try {
    const requests = list.map((idAuth) =>
      axios.get(dom + "/api/v1/collegiateBodies/" + idAuth)
    );

    const responses = await Promise.all(requests);
    let letras = "";

    responses.forEach((response) => {
      letras += response.data.data.name + ", ";
    });

    letras = letras.slice(0, -2); // Eliminar la última coma
    authorities.value = letras;
    console.log(letras);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
.guardado {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.head {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding-left: 20px;
  margin-bottom: 50px;
}

.head p {
  margin: 0;
}

.main-doc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: aliceblue;
}

.document {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.pre-charge {
  color: beige;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.material-symbols-outlined {
  background-color: rgb(0, 126, 168);
  user-select: none;
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  font-variation-settings: "FILL" 0, "wght" 700, "GRAD" 200, "opsz" 48;
}

.material-symbols-outlined:hover {
  background-color: deepskyblue;
}
</style>

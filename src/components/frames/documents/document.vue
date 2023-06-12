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
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const dom = "http://localhost:3000";

let id = useRoute().params.id;
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
}

.pre-charge {
  color: beige;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

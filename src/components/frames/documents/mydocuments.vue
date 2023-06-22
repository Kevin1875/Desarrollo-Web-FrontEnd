<script setup>
import axios from "axios";
import tabla from "../../tables/documentsTable.vue";
import { ref, onMounted, computed } from "vue";

import { useStore } from "vuex";

const store = useStore();
const id_user = computed(() => store.state.id);

function redirect(id) {
  const redirectURL = "/document/" + id;
  // Realiza cualquier lógica adicional antes de la redirección si es necesario
  // Realiza la redirección
  window.location.href = redirectURL;

  const resultado = ref(null);

  /*
  resultado = [
  { _id,

  },

]


  */
}

const documentos = ref([]);

onMounted(() => {
  //verifica si el documento esta guardado
  const url = "http://localhost:3000/api/v1/users/" + id_user.value;
  axios
    .get(url)
    .then((response) => {
      const documentos_guardados = response.data.data.saved;
      for (let i = 0; i < documentos_guardados.length; i++) {
        axios
          .get(
            "http://localhost:3000/api/v1/document/" + documentos_guardados[i]
          )
          .then((response) => {
            const objeto = {
              id: response.data.data._id,
              title: response.data.data.title,
              date: new Date(response.data.data.publicationDate).getFullYear(),
              type: response.data.data.type,
              collegiateBodies: getNombreCuerpoColegiado(
                response.data.data.collegiateBodies[0]
              ),
            };
            documentos.value.push(objeto);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    })
    .catch((error) => {
      // Manejo de errores en caso de que la solicitud falle
      console.error(error);
    });
});

function getNombreCuerpoColegiado(id) {
  const url = "http://localhost:3000/api/v1/collegiateBodies/" + id;
  const nombre = ref(null);
  axios
    .get(url)
    .then((response) => {
      nombre.value = response.data.data.name;
    })
    .catch((error) => {
      console.error(error);
    });
  return nombre;
}
</script>
<template>
  <div class="main-mydocuments">
    <div class="encima">
      <p>MIS DOCUMENTOS GUARDADOS</p>
    </div>
    <table class="tablita">
      <colgroup>
        <col style="width: 15%" />
        <col style="width: 20%" />
        <col style="width: 65%" />
      </colgroup>
      <tr>
        <th class="low-head-table col-1">AÑO</th>
        <th class="low-head-table col-2">TITULO</th>
        <th class="low-head-table col-3">CUERPO COLEGIADO</th>
        <th class="low-head-table col-4">TIPO</th>
      </tr>
      <tr
        v-for="documento in documentos"
        class="hovercito"
        :key="documento.id"
        @click="redirect(documento.id)"
      >
        <td v-text="documento.date" class="fila-columna"></td>
        <td v-text="documento.title" class="fila-columna"></td>
        <td v-text="documento.collegiateBodies" class="fila-columna"></td>
        <td v-text="documento.type" class="fila-columna"></td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
.main-mydocuments {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.encima {
  background-color: rgba(217, 217, 217, 0.15);
  margin-bottom: -10px;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 10px 10px 0px 0px;
  border: 2px solid;
  border-color: #0500ff;
  font-weight: bold;
  font-size: medium;
  color: white;
  height: 45px;
  width: 790px;
}

.encima p {
  text-align: center;
  margin: 0;
  padding-top: 9px;
}

.ss .Top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: larger;
}

.Top input {
  margin-left: 50px;
  width: 90%;
  border: 2px solid;
  border-color: gray;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  transition: all 0.7s ease;
}
.tablita {
  width: 800px;
  border-collapse: separate;
  border-spacing: 5px 10px;
  color: white;
  transition: all 0.7s ease;
}

.tablita tr:not(:first-child):hover {
  transform: scale(1.03);
  transition: all 0.3s ease;
  cursor: pointer;
}

.fila-columna {
  height: 40px;
  background-color: rgba(217, 217, 217, 0.15);
  text-align: center;
}

.low-head-table {
  background-color: rgba(217, 217, 217, 0.15);
  height: 40px;
  text-align: center;
}

.col-1 {
  border-radius: 0px 0px 0px 10px;
}

.col-3 {
  border-radius: 0px 0px 10px 0px;
}

.tablita tr td:first-child {
  border-radius: 10px 0px 0px 10px;
}

.tablita tr td:last-child {
  border-radius: 0px 10px 10px 0px;
}
</style>

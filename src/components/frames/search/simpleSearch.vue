<script>
import axios from "axios";
import { reactive, onMounted, watch } from "vue";
import simpleSearchButton from "../../buttons/simpleSearchButton.vue";

export default {
  components: {
    simpleSearchButton,
  },
  setup() {
    document.addEventListener("DOMContentLoaded", function () {
      var filas = document.querySelectorAll(".tablita tr:not(:first-child)");
      filas.forEach(function (fila) {
        fila.addEventListener("click", function () {
          // Obtener el valor de redirección de la fila
          var url = this.dataset.redirect;
          // Redireccionar al usuario a la URL deseada
          window.location.href = url;
        });
      });
    });

    let palabra;

    const search = reactive({
      dbDefault: "http://localhost:3000/api/v1/document?year=2023",
    });

    function update(palabra) {
      if (palabra) {
        search.dbDefault =
          "http://localhost:3000/api/v1/document?words=" + palabra;
      } else {
        search.dbDefault = "http://localhost:3000/api/v1/document?year=2023";
      }
    }

    const resultado = reactive({
      data: [],
      collegiateBodies: [],
    });

    watch(
      () => search.dbDefault,
      (newValue) => {
        axios.get(newValue).then(function (response) {
          // handle success
          resultado.data = response.data.data;
        });
      }
    );

    onMounted(() => {
      axios.get(search.dbDefault).then(function (response) {
        // handle success
        resultado.data = response.data.data;
      });
    });

    function redirect(id) {
      const redirectURL = "/document/" + id;
      // Realiza cualquier lógica adicional antes de la redirección si es necesario
      // Realiza la redirección
      window.location.href = redirectURL;
    }

    onMounted(() => {
      axios.get('http://localhost:3000/api/v1/collegiateBodies').then(function (response) {
        // handle success
        resultado.collegiateBodies = response.data.data;
      });
    });

    function findCollegiateBody(collegiateBodies, collegiateBodyId) {
      try {
        const colb = collegiateBodies.find((body) => body._id === collegiateBodyId);
        return colb.name
      } catch (error) {
        console.log(error);
      }

    }

    return {
      redirect,
      update,
      findCollegiateBody,
      resultado,
      palabra,
    };
  },
};
</script>

<template>
  <div class="ss">
    <div class="Top">
      <form id="simpleSearch" @submit.prevent="update(palabra)">
        <div style="display: flex; flex-direction: row;">
          <label for="palabra">Busqueda: </label>
          <input v-model="palabra" type="text" id="palabra" name="palabra" style="width: 400px; padding: 0 10px;"
            placeholder="Ingrese la palabra que desea buscar" />
        </div>
        <div class="botones">
          <simpleSearchButton class="wel" v-slot:name-button type="submit">Buscar</simpleSearchButton>
        </div>
      </form>
    </div>
  </div>
  <div class="nn">
    <div class="encima">
      <p>TOTAL DE {{ resultado.data.length }} REGISTROS ENCONTRADOS</p>
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
      <tr v-for="item in resultado.data" class="hovercito" :key="item._id" @click="redirect(item._id)">
        <td v-text="item.publicationDate.split('-')[0].trim()" class="fila-columna"></td>
        <td v-text="item.title" class="fila-columna"></td>
        <td v-text="findCollegiateBody(resultado.collegiateBodies, item.collegiateBodies[0])" class="fila-columna"></td>
        <td v-text="item.type" class="fila-columna"></td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
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
}

.encima p {
  text-align: center;
  margin: 0;
  padding-top: 9px;
}

.ss {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
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

.Top input:focus {
  outline: none;
  border: 3px solid;
  border-color: #0500ff;
}

.Top input:hover {
  outline: none;
  border: 3px solid;
  border-color: #0500ff;
}

.nn {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
  width: 60%;
  margin-left: auto;
  /* Agregado para centrar horizontalmente */
  margin-right: auto;
  /* Agregado para centrar horizontalmente */
}

.head-table {
  caption-side: top;
  text-align: center;
  font-weight: bold;
  border: 2px solid;
  border-color: #0500ff;
  border-collapse: collapse;
  background-color: rgba(217, 217, 217, 0.15);
  border-radius: 10px 10px 0px 0px;
  color: white;
}

.tablita {
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

<script>
import axios from "axios";
import { reactive, inject } from "vue";

export default {
  props: {
    db: {
      type: String,
      required: true,
    },
  },
  setup() {
    const search = inject("search");

    const resultado = reactive({
      data: [],
    });

    axios.get(search.dbDefault).then(function (response) {
      // handle success
      resultado.data = response.data.data;
    });

    document.addEventListener("DOMContentLoaded", function () {
      var filas = document.querySelectorAll(".table-sTable td");
      filas.forEach(function (fila) {
        fila.addEventListener("click", function () {
          // Obtener el valor de redirección de la fila
          var url = this.dataset.redirect;
          // Redireccionar al usuario a la URL deseada
          window.location.href = url;
        });
      });
    });

    function collegiateName(id) {
      let name;
      axios.get('http://localhost:3000/api/v1/collegiateBodies/' + id).then(function (response) {
        console.log(id);
        name = response.data.name;
      });
      return name;
    }

    return {
      resultado,
      collegiateName,
    };
  },
};
</script>

<template>
  <div class="main-sTable">
    <div class="top-tittle">
      <p>TOTAL DE {{ resultado.data.length }} RESULTADOS</p>
    </div>
    <table class="table-sTable">
      <colgroup>
        <col style="width: 10%" />
        <col style="width: 10%" />
        <col style="width: 20%" />
        <col style="width: 60%" />
      </colgroup>
      <tr>
        <th class="low-head-table col-1">AÑO</th>
        <th class="low-head-table col-2">TITULO</th>
        <th class="low-head-table col-2">TIPO</th>
        <th class="low-head-table col-3">CUERPO COLEGIADO</th>
      </tr>
      <tr v-for="item in resultado.data" class="hovercito" :key="item._id">
        <td v-text="item.publicationDate" class="fila-columna" :data-redirect="'/document/' + item._id"></td>
        <td v-text="item.title" class="fila-columna" :data-redirect="'/document/' + item._id"></td>
        <td v-text="item.type" class="fila-columna" :data-redirect="'/document/' + item._id"></td>
        <td :text="collegiateName(item.collegiateBodies[0])" class="fila-columna"
          :data-redirect="'/document/' + item._id">
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.top-tittle {
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

.top-tittle p {
  text-align: center;
  margin: 0;
  padding-top: 9px;
}

.main-sTable {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  /* Agregado para centrar horizontalmente */
  margin-right: auto;
  /* Agregado para centrar horizontalmente */
  cursor: default;
}

.table-sTable {
  border-collapse: separate;
  border-spacing: 5px 10px;
  color: white;
  transition: all 0.7s ease;
}

.hovercito:hover {
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

.table-sTable tr td:first-child {
  border-radius: 10px 0px 0px 10px;
}

.table-sTable tr td:last-child {
  border-radius: 0px 10px 10px 0px;
}
</style>

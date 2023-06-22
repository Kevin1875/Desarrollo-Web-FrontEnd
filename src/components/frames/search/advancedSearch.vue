<script>
import sTable from "../../tables/sTable.vue";
import axios from "axios";
import asform from "../utils/asform.vue";
import { reactive, watch, onMounted } from "vue";

export default {
  components: {
    sTable,
    asform,
  },
  setup() {
    const search = reactive({
      dbDefault: "http://localhost:3000/api/v1/document?year=2023",
    });

    function hide (){
      return 'hide'
    }

    function update(path) {
      search.dbDefault = "http://localhost:3000/api/v1/" + path;

    }

    const resultado = reactive({
      data: [],
      collegiateBodies: [],
    });

    watch(
      () => search.dbDefault,
      (newValue) => {
        console.log(newValue);
        axios.get(newValue).then(function (response) {
          // handle success
          resultado.data = response.data.data;
        }).catch(error => {
          console.error(error);
        });
      }
    );

    onMounted(() => {
      axios.get(search.dbDefault).then(function (response) {
        // handle success
        resultado.data = response.data.data;
        console.log(resultado.data);
      }).catch(error => {
        console.error(error);
      });
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
      }).catch(error => {
        console.error(error);
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
    };
  },
};
</script>

<template>
  <div class="main-as">
    <asform @busqueda="update" />

      <div class="main-sTable">
        <div class="top-tittle">
          <p>TOTAL DE {{ resultado.data.length }} REGISTROS ENCONTRADOS</p>
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
          <tr v-for="item in resultado.data" class="hovercito" :key="item._id" @click="redirect(item._id)">
            <td v-text="item.publicationDate.split('-')[0].trim()" class="fila-columna"></td>
            <td v-text="item.title" class="fila-columna"></td>
            <td v-text="item.type" class="fila-columna"></td>
            <td v-text="findCollegiateBody(resultado.collegiateBodies, item.collegiateBodies[0])" class="fila-columna">
            </td>
          </tr>
        </table>
      </div>
  </div>
</template>

<style scoped>

.hide{
  display: none;
}
.container-table {
  margin-left: 30px;
  width: 70%;
}

.main-as {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

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

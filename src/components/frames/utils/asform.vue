<script setup>
import simpleSearchButton from "../../buttons/simpleSearchButton.vue";
import axios from "axios";
import { defineEmits, reactive } from "vue";

const cuerposColegiados = reactive({ data: [] });

axios.get('http://localhost:3000/api/v1/collegiateBodies').then(response => {
  cuerposColegiados.data = response.data.data;
});

console.log(cuerposColegiados);

const tipoDocumentos = [
  { value: 1, label: "Acuerdo" },
  { value: 2, label: "Circular" },
  { value: 3, label: "Circular Conjunta" },
  { value: 4, label: "Concepto" },
  { value: 5, label: "Convención Colectiva" },
  { value: 6, label: "Decreto" },
  { value: 7, label: "Documento de Relatoría" },
  { value: 8, label: "Instructivo" },
  { value: 9, label: "Ley" },
  { value: 10, label: "Linea Jurisprudencial" },
  { value: 11, label: "Nota" },
  { value: 12, label: "Resolución" },
  { value: 13, label: "Sentencia" },
];

const emits = defineEmits("Busqueda");

const data = {
  palabra: "",
  año: "",
  tipo: "",
  cuerpoCol: "",
};

const path = () =>
  emits(
    "Busqueda",
    "document?word=" +
    data.palabra +
    "&type=" +
    data.tipo +
    "&year=" +
    data.año +
    "&collegiateBodies=" +
    data.cuerpoCol
  );

</script>

<template>
  <div>
    <div class="asformMain">
      <div class="Titulo">
        <H4>Busqueda Avanzada</H4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit animi
          dicta asperiores necessitatibus eligendi beatae nostrum.
        </p>
      </div>

      <div class="formSection">
        <form id="AdvanceSearch" @submit.prevent="path">
          <div class="formComponent">
            <label for="nombre">Palabra clave</label>
            <input v-model="data.palabra" type="text" id="nombre" name="nombre"
              placeholder="Ingrese la palabra que desea buscar" required />
          </div>
          <div class="formComponent">
            <label for="tipoDocumento">Tipo de Documento:</label>
            <select class="sle" id="tipoDocumento" name="tipoDocumento" v-model="data.tipo" required>
              <option v-for="option in tipoDocumentos" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>

          <div class="formComponent">
            <label for="año">Año</label>
            <input v-model="data.año" type="number" id="año" name="año" placeholder="Ingrese su email" min="2000"
              max="2100" required />
          </div>
          <div class="formComponent">
            <label for="cuerpoCol">Cuerpo Colegiado:</label>
            <select class="sle" id="cuerpoCol" name="cuerpoCol" v-model="data.cuerpoCol" required>
              <option v-for="option in cuerposColegiados.data" :value="option._id">
                {{ option.name }}
              </option>
            </select>
          </div>

          <div class="botones">
            <simpleSearchButton class="wel" v-slot:name-button type="submit">Buscar</simpleSearchButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.asformMain {
  background-color: rgba(217, 217, 217, 0.15);
  color: white;
  border-radius: 10px;
  max-width: 350px;
  height: fit-content;
}

.asformMain .Titulo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 30px 20px 0px 20px;
}

.formSection {
  padding: 0 20px 30px 20px;
}

.formerr {
  padding: 0 20px 30px 20px;
}

.formComponent {
  padding: 5px 0;
  display: flex;
  flex-direction: column;
}

.formComponent label {
  font-weight: 600;
  font-size: small;
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

.formerr .botones {
  display: flex;
  padding: 10px 0;
}

.wel {
  margin: 10px 10px;
}
</style>

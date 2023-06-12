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
    <div
      id="drop-zone"
      style="
        width: 300px;
        height: 200px;
        border: 2px dashed #ccc;
        padding: 20px;
        text-align: center;
      "
      @dragover.prevent
      @dragenter.prevent
      @drop="handleDrop"
    >
      <p>Arrastra el documento aquí</p>
    </div>
    <div class="docview-cr">contenido</div>
    <div class="form-cr">
      <div class="formComponent">
        <label for="pais"
          >Seleccione el tipo de documento que va a publicar:</label
        >
        <select class="sle" id="documentType" name="pais">
          <option v-for="option in tipoDocumentos" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>
      <div class="formComponent">
        <label for="pais"
          >Seleccione la autoridad que firma el documento:</label
        >
        <select class="sle" id="autoritySignature" name="pais">
          <option v-for="option in cuerposColegiados" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>
      <div class="comment-cr">
        <label>
          Añada los comentarios sobre el documento para las personas que van a
          revisarlo:
        </label>

        <textarea id="comments"></textarea>
      </div>
    </div>

    <div class="botones-cr" @click="enviarDatos()"><button>Enviar</button></div>
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

<script setup>
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

//CONTENEDOR DE PDF SCRIPT
const handleDrop = (event) => {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  // Aquí puedes hacer lo que necesites con el archivo
  console.log('Documento arrastrado:', file);
};
</script>

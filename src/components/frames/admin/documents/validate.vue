<template>
  <div class="main-cr">
    <div class="top-cr">
      <div class="tittle-cr">
        <h6>PANEL ADMINISTRACIÓN</h6>
      </div>
      <div class="subtittle-cr">
        <h3>GESTIÓN DE PUBLICACIONES</h3>
        <div class="status">VALIDAR PUBLICACIONES</div>
        <a href="/adminpanel/publication">
          <span class="material-symbols-outlined btn"> chevron_left </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

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
</script>

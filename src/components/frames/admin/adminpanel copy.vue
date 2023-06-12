<script setup>
import documentPanel from  './documents/view.vue'
import bodyPanel from  './bodies/view.vue'
import userPanel from  './users/view.vue'

</script>


<template>
  <div>
    <div class="tittle-ap">
      <h1>PANEL DE ADMINISTRACIÓN</h1>
    </div>
    <div class="content-ap">
      <div class="container-ap">
        <div class="tittle-container-ap">GESTIÓN DE PUBLICACIONES</div>
        <div class="text-container-ap">
          Solicitar publicación, solicitar cambios en publicación y validación
          de documentos
        </div>
      </div>

      <div class="container-ap">
        <div class="tittle-container-ap">GESTIÓN DE CUERPOS COLEGIADOS</div>
        <div class="text-container-ap">
          Creación de cuerpos colegiados, administración de permisos y usuarios
        </div>
      </div>

      <div class="container-ap">
        <div class="tittle-container-ap">GESTIÓN DE USUARIOS</div>
        <div class="text-container-ap">
          Crear usuarios, eliminar, administrar roles y permisos
        </div>
      </div>
    </div>
    <documentPanel/>
  </div>
</template>
<style scoped>
.tittle-container-ap {
  padding: 0 10px;
  text-align: center;
  font-weight: bold;
  font-size: larger;
  background-color: rgba(0, 163, 255, 0.15);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: transform 2s ease-in-out;
}

.text-container-ap {
  padding: 0 10px;
  height: 100px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-items: center;
}
.tittle-ap {
  text-align: center;
  margin-bottom: 100px;
  padding-top: 30px
}

.content-ap {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.container-ap {
  background-color: rgba(217, 217, 217, 0.15);
  margin: 0 20px;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  transition: transform 0.2s ease-in-out;
}

.container-ap:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.container-ap:hover .tittle-container-ap {
  background-color: rgba(0, 162, 255, 0.432);
  transition: all 0.5s ease-in-out;
}
</style>

<script setup>
import create from "./create.vue";
import modify from "./modify.vue";
import validte from "./validate.vue";
</script>
<template>
  <div class="main-d">
    <div class="top-cr">
      <div class="tittle-cr">
        <h6>PANEL ADMINISTRACIÓN</h6>
      </div>
      <div class="subtittle-cr">
        <h3>GESTIÓN DE PUBLICACIONES</h3>
        <div class="btn-atras"></div>
      </div>
    </div>

    <div class="container-d">
      <div class="item-d">Publicar</div>
      <div class="item-d">Modificar</div>
      <div class="item-d">Validar</div>
    </div>
  </div>
</template>

<style scoped>
.main-d {
  margin: 50px 0;
}

.container-d {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.item-d {
  display: flex;
  background-color: rgba(217, 217, 217, 0.15);
  margin: 0 20px;
  border-radius: 10px;
  width: 300px;
  height: 50px;
  transition: transform 0.2s ease-in-out;
  justify-content: center;
  align-items: center;
  font-weight: 800;
}

.item-d:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.top-cr {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
</style>

<template>
  <div class="main-pm">
    <div class="tittle-pm">
      <h6>PANEL ADMINISTRACIÓN</h6>
    </div>
    <div class="subtittle-pm">
      <h3>GESTIÓN DE PUBLICACIONES</h3>
      <div class="status">Crear Publicación</div>
      <div class="btn-atras"></div>
    </div>

    <div>contenido</div>
  </div>
</template>

<style scoped>

.main-pm{
    color: aliceblue;
}
.tittle-pm h6 {
  font-weight: 500;
  margin: 0;
}

.subtittle-pm {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.subtittle-pm h3 {
  font-weight: 800;
  margin: 0;
}

.subtittle-pm .status {
  font-weight: 600;
  font-size: 20px;
  background-color: aliceblue;
  border-radius: 50px;
  color:rgb(19, 20, 70);
  padding: 0 10px;
  display: flex;
  align-items:center;
}

.subtittle-pm .btn-atras {
    height: 35px;  
    width: 35px;  
    background-color: aliceblue;
    border-radius: 50px;
}
</style>

<script setup></script>

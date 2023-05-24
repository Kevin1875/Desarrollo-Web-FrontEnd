<template>
  <div class="main-cr">
    <div class="top-cr">
      <div class="tittle-cr">
        <h6>PANEL ADMINISTRACIÓN</h6>
      </div>
      <div class="subtittle-cr">
        <h3>GESTIÓN DE PUBLICACIONES</h3>
        <div class="status">CREAR PUBLICACIÓN</div>
        <div class="btn-atras"></div>
      </div>
    </div>

    <div class="form-cr">
      <div>
        <div class="formComponent">
          <label for="pais">seleccione el tipo de documento que va publicar:</label>
          <select class="sle" id="pais" name="pais">
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="México">México</option>
            <option value="Perú">Perú</option>
          </select>
        </div>
      </div>
      <div>
        <div class="formComponent">
          <label for="pais">seleccione el la autoridad que firma por el documento:</label>
          <select class="sle" id="pais" name="pais">
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="México">México</option>
            <option value="Perú">Perú</option>
          </select>
        </div>
      </div>
    </div>

    <div class="docview-cr">contenido</div>
    <div class="comments-cr"></div>
    <div class="botones-cr"></div>
  </div>
</template>

<style scoped>
.top-cr {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
  height: 200px;
  width: 100%;
  background-color: rgb(22, 56, 85);
  margin: 20px 0;
  display: flex;
  flex-direction: column;
}

.docview-cr {
  height: 100vh;
  width: 100%;
  background-color: aqua;
}

.comments-cr {
  height: 100px;
  background-color: aquamarine;
}
</style>

<script setup></script>

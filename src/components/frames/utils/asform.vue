<script setup>
import simpleSearchButton from "../../buttons/simpleSearchButton.vue";
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
        <form>
          <div class="formComponent">
            <label for="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div class="formComponent">
            <label for="apellido">Tipo</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Ingrese su apellido"
            />
          </div>

          <div class="formComponent">
            <label for="email">Año</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese su email"
            />
          </div>
          <div class="formComponent">
            <label for="pais">Cuerpo Colegiado:</label>
            <select class="sle" id="pais" name="pais">
              <option value="Argentina">Argentina</option>
              <option value="Brasil">Brasil</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
              <option value="México">México</option>
              <option value="Perú">Perú</option>
            </select>
          </div>

          <div class="botones">
            <simpleSearchButton class="wel" v-slot:name-button type="submit"
              >Enviar</simpleSearchButton
            >
            <simpleSearchButton v-slot:name-button type="reset"
              >Borrar</simpleSearchButton
            >
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

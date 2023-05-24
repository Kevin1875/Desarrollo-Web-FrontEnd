<script setup>
import simpleSearchButton from "../../buttons/simpleSearchButton.vue";
import carf from "../utils/carousel.vue";
import slider from "../utils/slider.vue";
import recomendationSlider from "../utils/recomendSlider.vue";
</script>

<template>
  <div class="main-lg">
    <div class="tituloz">
      <H1
        >SISTEMA DE INFORMACIÓN NORMATIVA, JURISPRUDENCIAL Y DE CONCEPTOS DE
        RÉGIMEN LEGAL</H1
      >
    </div>
    <div class="m1">
      <div class="messagge-main">
        <p class="Desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.

          <br />
          <br />

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <simpleSearchButton v-slot:name-button
          >Busqueda Simple</simpleSearchButton
        >
        <simpleSearchButton v-slot:name-button style="margin-left: 50px"
          >Busqueda Avanzada</simpleSearchButton
        >
      </div>
      <div class="recomendaciones">
        <div class="titulo">RECOMENDACIONES</div>
        <recomendationSlider />
      </div>
    </div>
    <div class="aaaaa">
      <slider />
    </div>

  </div>
</template>

<style scoped>

.main-lg{
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.tituloz {
  width: 100%;
  font-weight: bold;
}
.tituloz h1 {
  width: 100%;
  font-weight: bold;
  color: aliceblue;
}

.aaaaa {
  margin-top: 160px;
  background-color: rgb(217, 217, 217, 0.15);
  padding: 30px 10px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.m1 {
  display: flex;
  flex-direction: row;
  justify-content: space-around ;
  margin: 40px 0;
}

.messagge-main {
  width: 35%;
}

.recomendaciones {
  max-width: 550px;
  min-width: 550px;
}

.recomendaciones rec {
  text-align: center;
  color: brown;
}

.Desc {
  margin: 50px 0;
}

.titulo {
  background-color: rgb(217, 217, 217, 0.15);
  border-radius: 10px 10px 2px 2px;
  text-align: center;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:larger;
  font-weight: 400;
}

.base {
  margin-top: 5px;
  background-color: rgb(217, 217, 217, 0.15);
  border-radius: 2px 2px 2px 2px;
  padding: 20px;
}
</style>

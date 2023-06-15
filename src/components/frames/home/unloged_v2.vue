<script>
import simpleSearchButton from "../../buttons/simpleSearchButton.vue";
import slider from "../utils/slider.vue";
import { ref, onMounted, reactive } from "vue";

export default {
  components: {
    slider,
    simpleSearchButton,
  },
  setup() {
    let btnSimpleClass = ref("alm");
    let clickOnBottom = ref(false);
    let inputValue = ref("");

    const simpleClick = () => {
      btnSimpleClass.value = "alm2";
      clickOnBottom.value = true;
    };

    const storeInputValue = () => {
      console.log(inputValue.value);
    };

    const isClickedOutside = ref(false);

    onMounted(() => {
      const handleClickOutside = (event) => {
        if (!clickOnBottom.value.$el.contains(event.target)) {
          console.log("ijueputa");
          isClickedOutside.value = true;
        }
      };

      document.addEventListener("click", handleClickOutside);
    });

    return {
      btnSimpleClass,
      clickOnBottom,
      inputValue,
      simpleClick,
      storeInputValue,
    };
  },
};
</script>

<template>
  <div class="main-lg">
    <div class="tituloz">
      <h1>
        SISTEMA DE INFORMACIÓN NORMATIVA, JURISPRUDENCIAL Y DE CONCEPTOS DE
        RÉGIMEN LEGAL
      </h1>
    </div>
    <div class="m1">
      <div class="messagge-main">
        <p class="Desc">
          Esta es una herramienta diseñada para recopilar, organizar y difundir
          la legislación, jurisprudencia y conceptos relacionados con el régimen
          legal de la Universidad Nacional de Colombia.

          <br />
          <br />

          Nuestro objetivo principal es facilitar el acceso y la consulta de la
          información legal relevante para los profesionales del derecho, como
          abogados, jueces, investigadores y estudiantes. Proporciona una
          plataforma centralizada donde se pueden encontrar leyes, decretos,
          reglamentos, resoluciones judiciales, entre otros.
        </p>

        <div :class="btnSimpleClass">
          <simpleSearchButton v-slot:name-button> <a href="/simplesearch">Búsqueda Simple</a> </simpleSearchButton>

          <simpleSearchButton v-slot:name-button><a href="/advancedsearch">Búsqueda avanzada</a></simpleSearchButton>
        </div>
      </div>
    </div>
    <div class="noticias">
      <slider />
    </div>
  </div>
</template>

<style scoped>
.search_input {
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.search_input input {
  width: 250px;
  height: 40px;
  border: 2px solid;
  border-color: gray;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  padding-left: 5px;
  transition: all 0.7s ease;
}

.search_input input:focus {
  outline: none;
  border-color: #0500ff;
}

.search_input input:hover {
  outline: none;
  border-color: #0500ff;
}

.alm {
  max-width: 340px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.alm2 {
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: space-between;
}

.main-lg {
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

.noticias {
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
  justify-content: space-around;
  margin: 40px 0;
}

.messagge-main {
  width: 35%;
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
  font-size: larger;
  font-weight: 400;
}

.base {
  margin-top: 5px;
  background-color: rgb(217, 217, 217, 0.15);
  border-radius: 2px 2px 2px 2px;
  padding: 20px;
}

.material-symbols-outlined {
  display: flex;
  height: 35px;
  width: 35px;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50px;
  transition: all 0.7s ease;
  margin: 0 5px;
  font-variation-settings: "FILL" 1, "wght" 700, "GRAD" 200, "opsz" 48;
}

.material-symbols-outlined:hover {
  cursor: pointer;
  background-color: rgba(128, 128, 128, 0.452);
  color: rgb(9, 176, 218);
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}
</style>

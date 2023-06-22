<template>
  <div class="slider">
    <div class="slide" v-for="item in recomentations">
      <a :href="'document/'+item.id">
        <div class="rs-container">
          <h3>
            {{ item.title }}
          </h3>
          <h6>
            {{ item.type }}
          </h6>
        </div>
      </a>
    </div>
  </div>

  <div class="navigation">
    <!--<span class="dot" id="prevBtn"></span>-->
    <span class="material-symbols-outlined dot" id="prevBtn">
      chevron_left
    </span>

    <span class="material-symbols-outlined dot" id="nextBtn">
      chevron_right
    </span>
    <!--<span class="dot" id="nextBtn"></span>-->
  </div>
</template>

<style scoped>

a{
  color: inherit;
  text-decoration: none;
}
.rs-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 20px;
}
.rs-container p {
  text-align: justify;
}

.slider {
  width: 100%; /* Ancho del slider */
  height: 100%; /* Altura del slider */
  overflow: hidden; /* Oculta los elementos que se salgan del área del slider */
  position: relative;
  background-color: rgb(217, 217, 217, 0.15);
  margin-top: 10px;
  border-radius: 10px;
}

.slide {
  width: 100%; /* Ancho de cada slide */
  height: 100%; /* Altura de cada slide */
  display: none; /* Oculta los slides por defecto */
  position: absolute;
  top: 0;
  left: 0;
}

.slide.active {
  display: block; /* Muestra el slide activo */
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation {
  text-align: center;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: center;
}

.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #bbb;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px;
  user-select: none;
}

.dot:active {
  background-color: #555;
}
.material-symbols-outlined {
  color: rgb(83, 83, 83);
  font-variation-settings: "FILL" 0, "wght", "GRAD" 0, "opsz" 48;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const resultado = ref(null);

const recomentations = ref([
  {
    id: "646e8897c4f7f1861918df87",
    title: "Large Document",
    type: "Publicación",
    collegiateBodies: "Facultad de minas",
  },
  {
    id: "646e8897c4f7f1861918df87",
    title: "Large Fold",
    type: "Publicación",
    collegiateBodies: "Facultad de minas",
  },
]);

console.log(recomentations.value);

onMounted(() => {
  axios
    .get("http://localhost:3000/api/v1/document?year=2023")
    .then(function (response) {
      // handle success
      resultado.value = Object.values(response.data.data).slice(0, 5);
      for (const key in resultado.value) {
        if (Object.prototype.hasOwnProperty.call(resultado.value, key)) {
          const { _id, title, type, collegiateBodies } = resultado.value[key];
          recomentations.value.push({ id: _id, title, type, collegiateBodies });
        }
      }
    });
  document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll(".dot");
    var currentSlide = 0;
    var intervalId;

    // Muestra el slide actual
    function showSlide() {
      // Oculta todos los slides
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }

      // Oculta todos los puntos de navegación
      for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }

      // Muestra el slide actual y activa el punto de navegación correspondiente
      slides[currentSlide].classList.add("active");
      dots[currentSlide].classList.add("active");
    }

    // Avanza al siguiente slide
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      try {
        showSlide();
      } catch (err) {}
    }

    // Retrocede al slide anterior
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      showSlide();
    }

    // Mostrar el slide inicial
    showSlide();

    // Obtener referencias a los botones de siguiente y anterior
    var nextBtn = document.getElementById("nextBtn");
    var prevBtn = document.getElementById("prevBtn");

    // Escucha los eventos de los botones de siguiente y anterior
    nextBtn.addEventListener("click", function () {
      clearInterval(intervalId); // Detener el cambio automático al hacer clic manualmente
      nextSlide();
    });
    prevBtn.addEventListener("click", function () {
      clearInterval(intervalId); // Detener el cambio automático al hacer clic manualmente
      prevSlide();
    });

    // Cambiar automáticamente el slide cada 5 segundos
    intervalId = setInterval(nextSlide, 5000);
  });
});
</script>

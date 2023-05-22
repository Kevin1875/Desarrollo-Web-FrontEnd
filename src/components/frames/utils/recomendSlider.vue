<template>
  <div class="slider">
    <div class="slide">
      <div class="rs-container">
        <h5>
          Acuerdo 211 de 1945 Consejo Directivo (actual Consejo Superior
          Universitario)
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="slide">
      <div class="rs-container">
        <h3>
          Acuerdo 304 de 2017 Consejo Directivo (actual Consejo Superior
          Universitario)
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="slide">
      <div class="rs-container">
        <h3>
          Acuerdo 12 de 2021 Consejo Directivo (actual Consejo Superior
          Universitario)
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="slide">
      <div class="rs-container">
        <h3>
          Acuerdo 92 de 2018 Consejo Directivo (actual Consejo Superior
          Universitario)
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="slide">
      <div class="rs-container">
        <h3>
          Acuerdo 211 de 1945 Consejo Directivo (actual Consejo Superior
          Universitario)
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <div class="slide">
      <div class="rs-container">
        <h3>
          Acuerdo 211 de 1945 Consejo Directivo (actual Consejo Superior
          Universitario)
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>

  <div class="navigation">
    <span class="dot" id="prevBtn"></span>
    <span class="dot"></span>
    <span class="dot" id="nextBtn"></span>
  </div>
</template>

<style scoped>
.rs-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 20px;
}
.rs-container p{
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
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #bbb;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot:active {
  background-color: #555;
}
</style>

<script setup>
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
    showSlide();
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
</script>

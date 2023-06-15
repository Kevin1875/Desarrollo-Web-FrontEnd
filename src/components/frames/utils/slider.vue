<script>
import axios from "axios";
import recommendationCard from "./recomendationCard.vue";
import { reactive, onMounted } from "vue";

export default {
  components: {
    recommendationCard,
  },
  setup() {
    const resultado = reactive({
      data: [],
    });

    onMounted(() => {
      axios.get("http://localhost:3000/api/v1/document?year=2023").then(function (response) {
        // handle success
        resultado.data = Object.values(response.data.data).slice(0, 8);
      });
    });

    document.addEventListener("DOMContentLoaded", () => {
      const wrapper = document.querySelector(".wrapper");
      const carousel = document.querySelector(".carousel");
      const firstCardWidth = carousel.querySelector(".card").offsetWidth;
      const arrowBtns = document.querySelectorAll(".wrapper i");
      const carouselChildrens = [...carousel.children];

      let isDragging = false,
        isAutoPlay = true,
        startX,
        startScrollLeft,
        timeoutId;

      // Get the number of cards that can fit in the carousel at once
      let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

      // Insert copies of the last few cards to beginning of carousel for infinite scrolling
      carouselChildrens
        .slice(-cardPerView)
        .reverse()
        .forEach((card) => {
          carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

      // Insert copies of the first few cards to end of carousel for infinite scrolling
      carouselChildrens.slice(0, cardPerView).forEach((card) => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
      });

      // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove("no-transition");

      // Add event listeners for the arrow buttons to scroll the carousel left and right
      arrowBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          carousel.scrollLeft +=
            btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
      });

      const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
      };

      const dragging = (e) => {
        if (!isDragging) return; // if isDragging is false return from here
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
      };

      const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
      };

      const infiniteScroll = () => {
        // If the carousel is at the beginning, scroll to the end
        if (carousel.scrollLeft === 0) {
          carousel.classList.add("no-transition");
          carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
          carousel.classList.remove("no-transition");
        }
        // If the carousel is at the end, scroll to the beginning
        else if (
          Math.ceil(carousel.scrollLeft) ===
          carousel.scrollWidth - carousel.offsetWidth
        ) {
          carousel.classList.add("no-transition");
          carousel.scrollLeft = carousel.offsetWidth;
          carousel.classList.remove("no-transition");
        }

        // Clear existing timeout & start autoplay if mouse is not hovering over carousel
        clearTimeout(timeoutId);
        if (!wrapper.matches(":hover")) autoPlay();
      };

      const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
        // Autoplay the carousel after every 2500 ms
        timeoutId = setTimeout(
          () => (carousel.scrollLeft += firstCardWidth),
          5000
        );
      };
      autoPlay();

      carousel.addEventListener("mousedown", dragStart);
      carousel.addEventListener("mousemove", dragging);
      document.addEventListener("mouseup", dragStop);
      carousel.addEventListener("scroll", infiniteScroll);
      wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.addEventListener("mouseleave", autoPlay);
    });

    function redirect(id) {
      const redirectURL = "/document/" + id;
      // Realiza cualquier lógica adicional antes de la redirección si es necesario
      // Realiza la redirección
      window.location.href = redirectURL;
    }

    return {
      resultado,
      redirect,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <i id="left" class="fa-solid fa-angle-left"></i>
    <div class="carousel">
      <div class="card" v-for="item in    resultado.data   " :key="item._id" @click="redirect(item._id)">
        <recommendationCard :title="item.title" />
      </div>
    </div>
    <i id="right" class="fa-solid fa-angle-right"></i>
  </div>
</template>



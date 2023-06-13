<script setup>
import { ref } from "vue";
import create from "./create.vue";
import { computed } from "@vue/reactivity";

let frameActive = ref(0);
let hide = ref(false);

function dis() {
  if (!hide) {
    return { "btn-atras": true, hide: false };
  } else {
    return { "btn-atras": false, hide: true };
  }
}

function cambio() {
  console.log("pasaaa");
  if (frameActive.value === 0) {
    return { "container-d": true, hide: false };
  } else {
    return { "container-d": false, hide: true };
  }
}

function createS() {
  if (frameActive.value === 1) {
    return { "": true, hide: false };
  } else {
    return { "": false, hide: true };
  }
}

function createT() {
  if (frameActive.value === 2) {
    return { "": true, hide: false };
  } else {
    return { "": false, hide: true };
  }
}

const classCounter = computed(() => {
  if (!frameActive.value === 0) {
    console.log("EY");
    return "hide";
  }
});

function showing(value) {
  if (!frameActive === value) {
    console.log("pasa");
    return { hide: true };
  }
}

let showPub = () => {
  frameActive.value = 0;
  console.log(frameActive.value);
};

let showCreateD = () => {
  frameActive.value = 1;
  console.log(frameActive.value);
};
let showModifyD = () => {
  frameActive.value = 2;
  console.log(frameActive.value);
};
let showValidateD = () => {
  frameActive.value = 3;
  console.log(frameActive.value);
};

let esconder = () => {
  hide.value = true;
};
</script>
<template>
  <div>
    <div class="top-cr">
      <div class="tittle-cr">
        <h6>PANEL ADMINISTRACIÓN</h6>
      </div>
      <div class="subtittle-cr">
        <h3>GESTIÓN DE CUERPOS COLEGIADOS</h3>
        <a href="/adminpanel"
          ><span class="material-symbols-outlined btn"> chevron_left </span>
        </a>
      </div>
    </div>

    <div :class="cambio()">
      <a href="/adminpanel/collegebody/create"
        ><div class="item-d">Crear</div>
      </a>
      <a href="/adminpanel/collegebody/modify"
        ><div class="item-d">Modificar</div>
      </a>
      <a href="/adminpanel/collegebody/validate"
        ><div class="item-d">Eliminar</div>
      </a>
    </div>
  </div>

  <create :class="createS()" />
  <modify class="hide" />
  <validate class="hide" />
</template>

<style scoped>
.hide {
  display: none;
}
.main-d {
  margin: 50px 0;
  color: white;
}

.container-d {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px 0;
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

/* ESTILOS DEL TITULO DE LA SECCIÓN*/
.top-cr {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: white;
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
  height: 40px;
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

.subtittle-cr .btn-atras-cr {
  height: 35px;
  width: 35px;
  background-color: aliceblue;
  border-radius: 50px;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
  color: inherit;
}

/* ESTILO DE FLECHA ATRAS */
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 700, "GRAD" 0, "opsz" 48;
  color: rgb(22, 22, 22);
  height: 30px;
  width: 30px;
  background-color: aliceblue;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
}
.material-symbols-outlined:hover {
  height: 33px;
  width: 33px;
}
</style>

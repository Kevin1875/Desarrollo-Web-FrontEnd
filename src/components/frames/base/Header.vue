<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const user = defineProps({
  name: {
    type: String,
    default: "",
  },
  status: {
    type: Boolean,
    // default: false
    // validator:
  },
});

const emit = defineEmits("Update");

const login = () => {
  emit("Update", !user.status);
};

let isScroll = ref(true);

function header() {
  if (isScroll.value) {
    return { headerr: true, headerr2: false };
  } else {
    return { headerr: false, headerr2: true };
  }
}

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 0) {
    isScroll.value = false;
  } else {
    isScroll.value = true;
  }
});
</script>

<template>
  <header :class="header()">
    <div class="log" href="https://unal.edu.co/">
      <a href="https://unal.edu.co/"
        ><img src="../../icons/logoun.svg" alt="xd" class="logo-un"
      /></a>
    </div>
    <nav class="nav">
      <ul class="ul">
        <li class="li"><a href="#/">Inicio</a></li>
        <li v-show="user.status" class="li">
          <a href="#/Favoritos">Mis Documentos</a>
        </li>
        <li class="li"><a href="#/Ayuda">Ayuda</a></li>
      </ul>
    </nav>
    <div class="login">
      <div class="bt-login" @:click="login">
        <label v-if="!user.status">login</label>
        <label v-else>{{ user.name }}</label>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
}

.headerr {
  color: #ffffff;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 5%;
  position: fixed;
  top: 0;
  transition: all 0.7s ease;
  z-index: 999;
}

.headerr2 {
  color: white;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 5%;
  background-color: #212121;
  position: fixed;
  top: 0;
  z-index: 999;
  transition: all 0.7s ease;
}

.log {
  display: flex;
  align-items: center;
}

.log .logo-un {
  width: 60px;
  height: 30px;
  display: flex;
}

.nav {
  width: fit-content;
}

.nav .ul {
  display: flex;
  padding: 0;
  text-align: center;
}

.nav .ul .li {
  display: inline-block;
  padding: 10px;
}

li a {
  text-decoration: none;
  color: inherit;
  transition: all 0.5s ease;
}

li a:hover {
  padding: 5px 10px;
  background-color: #ffffff;
  color: black;
  border-radius: 15px;
}

.login .bt-login a {
  text-decoration: none;
  color: inherit;
  transition: all 0.5s ease;
  cursor: pointer;
}
.bt-login a:hover {
  padding: 0px 6px;
  background-color: #ffffff;
  color: black;
  border-radius: 15px;
}

.login {
  padding: 10px;
  float: right;
}
.bt-login {
  align-items: center;
  border-radius: 15px;
  padding: 0px 5px;
  background-color: #ffffff;
  color: #031448;
  font-weight: 800;
}
</style>

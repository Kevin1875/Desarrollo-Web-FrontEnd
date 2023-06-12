<script setup>
import loged from "./loged.vue";
import unloged from "./unloged.vue";
import { ref, onMounted, watch } from 'vue';

function showLoged() {
  console.log("pasaaa");
  if (frameActive.value) {
    return { "": true, hide: false };
  } else {
    return { "": false, hide: true };
  }
}

function showUnloged() {
  console.log("pasaaa");
  if (!frameActive.value) {
    return { "": true, hide: false };
  } else {
    return { "": false, hide: true };
  }
}

let frameActive = ref(true);

let loginAction = () => {
  frameActive.value = !frameActive.value;
};

props: ['mensaje']

</script>

<template>
  <loged :class="showLoged()" />
  <unloged :class="showUnloged()" />

  <button @click="loginAction">ACTIVALO</button>
  <div>
    <p v-if="mensaje">{{ mensaje }}</p>
    <p v-else>No hay mensaje disponible.</p>
  </div>
</template>

<style scoped>
.hide {
  display: none;
}
</style>

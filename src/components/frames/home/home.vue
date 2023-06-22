<script setup>
import loged from "./loged.vue";
import unloged from "./unloged_v2.vue";
import { ref, onMounted, watch } from 'vue';

function showLoged() {
  if (frameActive.value) {
    return { "": true, hide: false };
  } else {
    return { "": false, hide: true };
  }
}

function showUnloged() {
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
</template>

<style scoped>
.hide {
  display: none;
}
</style>

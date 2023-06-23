<script setup>
import loged from "./loged.vue";
import unloged from "./unloged_v2.vue";
import { ref, onMounted, computed } from 'vue';
import { useStore } from "vuex";

const store = useStore();
const id = computed(() => store.state.id);
console.log(id.value)
</script>

<template>
  <div v-if="id === null">
    <unloged/>
  </div>

  <div v-else>
    <loged  />
  </div>

</template>

<style scoped>
.hide {
  display: none;
}
</style>

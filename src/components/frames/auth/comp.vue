<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const contador = computed(() => store.state.id);

</script>

<template>
    <h1>{{ contador }}</h1>
</template>

<style scoped>
</style>
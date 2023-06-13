<script setup>
import navbar from "./components/frames/base/Header.vue";
import pFooter from "./components/frames/base/Footer.vue";
import mainContent from "./components/frames/base/mainContent.vue";
import { useRoute, useRouter } from 'vue-router'
import { ref, watchEffect } from "vue";
import { onMounted } from "vue";

const route = useRoute();
const router = useRouter();
const isLoginPage = ref(null)

onMounted(async () => {
  await router.isReady();
  isLoginPage.value = (route.path === '/login')
});

</script>

<template>
  <navbar v-if="!isLoginPage"/>
  <div class="mainContentClass">
    <mainContent />
  </div>
  <pFooter v-if="!isLoginPage"/>
</template>

<style scoped>
.mainContentClass {
  display: flex;
  justify-content: center;
}
</style>

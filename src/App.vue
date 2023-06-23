<script setup>
import navbar from "./components/frames/base/Header.vue";
import pFooter from "./components/frames/base/Footer.vue";
import mainContent from "./components/frames/base/mainContent.vue";
import { useRoute, useRouter } from 'vue-router'
import { ref, watchEffect } from "vue";
import { onMounted } from "vue";

const route = useRoute();
const router = useRouter();
const isLoginPage = ref(null);
const isSingupPage = ref(null);

const hide = ref(null);

onMounted(async () => {
  await router.isReady();
  isLoginPage.value = (route.path === '/login')
  isSingupPage.value = (route.path === '/signup')
  hide.value = isLoginPage.value || isSingupPage.value;
  console.log(hide.value);

});

</script>

<template>
  <navbar v-if="!hide"/>
  <div class="mainContentClass">
    <mainContent />
  </div>
  <pFooter v-if="!hide"/>
</template>

<style scoped>
.mainContentClass {
  display: flex;
  justify-content: center;
}
</style>

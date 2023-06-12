<script setup>
import navbar from './components/frames/base/Header.vue';
import pFooter from './components/frames/base/Footer.vue';
import mainContent from './components/frames/base/mainContent.vue';

</script>

<template>
    <navbar/>
    <mainContent class="mainContentClass"/>
    <pFooter/>
</template>

<style scoped>
.mainContentClass{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 50px;
    margin-top: 80px;
    margin-bottom: 80px;
    min-height: 100vh
}

</style>
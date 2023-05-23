<script setup>
import navbar from './components/frames/base/Header.vue';
import pFooter from './components/frames/base/Footer.vue';
import mainContent from './components/frames/base/mainContent.vue';
</script>

<template>
    <navbar/>
    <div class="mainContentClass">
        <mainContent />
    </div>
    <pFooter/>
</template>

<style scoped>
.mainContentClass{
    display: flex;
    justify-content: center;
}
</style>
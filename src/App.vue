<script setup>
import navbar from './components/frames/base/Header.vue';
import pFooter from './components/frames/base/Footer.vue';
import mainContent from './components/frames/base/mainContent.vue';
</script>

<template>
    <navbar/>
    <div class="mainFrameClass">
        <mainContent />
    </div>
    <pFooter/>
</template>

<style scoped>
.mainFrameClass{
    display: flex;
    justify-content: center;
}
</style>
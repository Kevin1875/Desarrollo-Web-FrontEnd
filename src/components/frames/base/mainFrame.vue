<script setup>
import navbar from './Header.vue';
import pFooter from './Footer.vue';
import mainContent from '../mainContent.vue';

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
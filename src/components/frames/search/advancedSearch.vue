<script setup>
import simpleSearchButton from '../../buttons/simpleSearchButton.vue';
import sTable from '../../tables/sTable.vue'
import asform from '../utils/asform.vue'
</script>

<template>
    <div class="main-as">
        <asform/>
        <div class="container-table"> 
            <sTable/>
        </div>
    </div>
</template>

<style scoped>
.container-table{
    margin-left: 30px;
    width: 70%;

}
.main-as{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>

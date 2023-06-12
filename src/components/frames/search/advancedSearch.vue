<script setup>
import { ref, onMounted } from "vue";

import simpleSearchButton from '../../buttons/simpleSearchButton.vue';
import sTable from '../../tables/sTable.vue'
import asform from '../utils/asform.vue'

const data = {
  palabra: "",
  tipo: "",
  año: "",
  cuerpoCol:""
}

</script>

<template>
    <div class="main-as">
        <asform @Data="data"/>
        <div class="container-table"> 
            <sTable :data="data"/>
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

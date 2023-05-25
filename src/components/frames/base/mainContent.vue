<script setup>
//Home
import loged from '../home/loged.vue';

//Search
import simpleSearch from '../search/simpleSearch.vue';
import advancedSearch from '../search/advancedSearch.vue';
import simpleSearch2 from '../search/simpleSearch2.vue';
import asform from '../utils/asform.vue'

import adminpanel from '../admin/adminpanel.vue'
import creation from '../admin/documents/create.vue'

import statuspTable from '../../tables/statuspTable.vue';


</script>

<template>
    <div class="main">
        <adminpanel/>
    </div>
</template>

<style scoped>
.main{
    /*background-color: red;*/
    width: 90%;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 80px;
    margin-bottom: 80px;
    min-height: 100vh;
    display:flex;
    justify-content: center;

}

</style>
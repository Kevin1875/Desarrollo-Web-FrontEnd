<script setup>
import navbar from './components/frames/base/Header.vue';
import pFooter from './components/frames/base/Footer.vue';
// import mainContent from './components/frames/base/mainContent.vue';

//Home
import loged from './components/frames/home/loged.vue';
import unloged from './components/frames/home/unloged.vue';

//Search
import simpleSearch from './components/frames/search/simpleSearch.vue';
import advancedSearch from './components/frames/search/advancedSearch.vue';
import simpleSearch2 from './components/frames/search/simpleSearch2.vue';
import asform from './components/frames/utils/asform.vue'

import adminpanel from './components/frames/admin/adminpanel.vue'
import creation from './components/frames/admin/documents/create.vue'

import statuspTable from './components/tables/statuspTable.vue';

import { ref, computed } from 'vue'
import { reactive } from "vue";

const user = reactive({ name: "Cupidatat sit", status: false });

const updateUser = value => {user.status=value}

const Inicio = unloged

function logedUnloged() {
    if (user.status) {
        Inicio = unloged;
    } else {
        Inicio = loged;
    }
}

const routes = {
  '/': loged,
  '/BusquedaSimple': simpleSearch,
  '/BusquedaAvanzada': advancedSearch,
  '/Ayuda': unloged
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<template>
    <navbar :name="user.name" :status="user.status" @Update="updateUser"/>
    <div class="mainContentClass">
        <component :is="currentView" />
    </div>
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
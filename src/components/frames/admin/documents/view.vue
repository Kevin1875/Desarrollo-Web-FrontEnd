<script setup>
import {ref} from 'vue' 
import create from "./create.vue";
import modify from "./modify.vue";
import validate from "./validate.vue";
import { computed } from '@vue/reactivity';



let frameActive = ref(0);

function cambio(){
  console.log('pasaaa')
    if (frameActive.value === 0){
        return {'main-d': true, 'hide': false};
    }else{
        return {'main-d': false, 'hide': true};
    }
}

function createS() {
    if (frameActive.value === 1){
        return {'': true, 'hide': false};
    }else{
        return {'': false, 'hide': true};
    }
}

const classCounter = computed(() => {
  if (!frameActive.value === 0){
    console.log('EY')
    return 'hide'
  }
})

function showing(value){
  if (!frameActive === value){
    console.log('pasa')
    return {'hide': true}
  }
}
let showCreateD = () =>{
  frameActive.value = 1;
  console.log(frameActive.value)
}
let showModifyD = () =>{
  frameActive.value = 2;
  console.log(frameActive.value)

}
let showValidateD = () =>{
  frameActive.value = 3;
  console.log(frameActive.value)

}
</script>
<template>
  <div >
    <div :class="cambio()" class="prueba">
    <div class="top-cr">
      <div class="tittle-cr">
        <h6>PANEL ADMINISTRACIÓN</h6>
      </div>
      <div class="subtittle-cr">
        <h3>GESTIÓN DE PUBLICACIONES</h3>
        <div class="btn-atras"></div>
      </div>
    </div>
  </div>


    <div class="container-d">
      <div class="item-d" @click="showCreateD" :class=showing(1)>Publicar</div>
      <div class="item-d" @click="showModifyD" :class=showing(2)>Modificar</div>
      <div class="item-d" @click="showValidateD" :class=showing(3)>Validar</div>
    </div>
  </div>

  <create :class="createS()"/>
  <modify class="hide"/>
  <validate class="hide"/>



</template>

<style scoped>

.prueba{
  background-color: rebeccapurple;
}
.hide{
  display: none;
}
.main-d {
  margin: 50px 0;
  color: white;
}

.container-d {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px 0;
}

.item-d {
  display: flex;
  background-color: rgba(217, 217, 217, 0.15);
  margin: 0 20px;
  border-radius: 10px;
  width: 300px;
  height: 50px;
  transition: transform 0.2s ease-in-out;
  justify-content: center;
  align-items: center;
  font-weight: 800;
}

.item-d:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.top-cr {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.tittle-cr h6 {
  font-weight: 500;
  margin: 0;
}

.subtittle-cr {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.subtittle-cr h3 {
  font-weight: 700;
  margin: 0;
}

.subtittle-cr .status {
  font-weight: 800;
  font-size: 25px;
  border-radius: 50px;
  color: aliceblue;
  display: flex;
  align-items: center;
}

.subtittle-cr .btn-atras {
  height: 35px;
  width: 35px;
  background-color: aliceblue;
  border-radius: 50px;
}
</style>

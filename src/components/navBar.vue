<script setup>
import { defineProps } from 'vue';

const user = defineProps({
  name: {
    type: String,
    default: ""
  },
  status: {
    type: Boolean,
    // default: false
    // validator: 
  }
});

const emit = defineEmits('Update');

const login = () => {emit('Update', !user.status)}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navBar">
    <a class="navbar-brand" href="#">
      <img
        src="/src/assets/LogoUN.svg"
        alt="logo"
        width="70"
        height="35"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <label class="nav-link active" aria-current="page" >Inicio</label>
        </li>
        <li v-show="user.status" class="nav-item">
          <label class="nav-link" >Documentos</label>
        </li> 
        <li class="nav-item">
          <label class="nav-link" >Ayuda</label>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input
          @keyup.enter=""
          class="form-control me-2"
          type="search"
          placeholder="Buscar en la base de datos del Régimen Legal..."
          aria-label="Buscar en la base de datos del Régimen Legal..."
        />
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
      <button
        v-show="!user.status"
        type="button"
        class="btn btn-success"
        @click="login"
      >
        Iniciar sección
      </button>
      <div v-show="user.status" class="profile-options" @click="login">
        <label for="profile" style="color: #ffffff">{{ user.name }}</label>
        <img src="/src/assets/Vector.svg" alt="profile" id="profile" />
      </div>
    </div>
  </nav>
</template>

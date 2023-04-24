<script>
import { reactive } from "vue";

const usuario = reactive({ name: "Cupidatat sit", status: false });

function login() {
  user.status = !user.status;
  console.log(user.status);
}
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
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li v-show="true" class="nav-item">
          <a class="nav-link" href="#">Documentos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ayuda</a>
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
        v-show="true"
        type="button"
        class="btn btn-success"
        @click="login"
      >
        Iniciar sección
      </button>
      <div v-show="true" class="profile-options">
        <label for="profile" style="color: #ffffff">sdafsadascl</label>
        <img src="/src/assets/Vector.svg" alt="profile" id="profile" />
      </div>
    </div>
  </nav>
</template>

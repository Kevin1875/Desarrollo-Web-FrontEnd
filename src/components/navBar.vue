<script setup>
const login = false;

const name = "Cupidatat sit";

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="/src/assets/LogoUN.svg"
          alt="Logo"
          width="60"
          height="30"
          class="d-inline-block align-text-top"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Inicio</a>
          </li>
          <li v-show="login" class="nav-item">
            <a class="nav-link" href="#">Documentos</a>
            <!-- Menu para la gestion de documentos subidos, tiene que iniciar seccion y tener el permiso -->
          </li>
          <li v-show="login" class="nav-item">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Entidades</a
            >
            <!-- Lista de entidades academicas -->
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="http://secretaria.unal.edu.co/" target="_blank"
                  >Secretaría general</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="http://csu.unal.edu.co/" target="_blank"
                  >Consejo superior universitario</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="http://consejoacademico.unal.edu.co/" target="_blank"
                  >Consejo académico</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="http://www.votacion.unal.edu.co/" target="_blank"
                  >Elecciones y consultas en la universidad nacional de
                  Colombia</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="http://gestionypatrimoniodocumental.unal.edu.co/" target="_blank"
                  >Oficina nacional del gestión y patrimonio documental</a
                >
              </li>
              <li>
                <a class="dropdown-item dropdown-toggle" href="#"
                  >Gestion administrativa y financiera</a
                >
                <ul class="submenu dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="http://www.gerencia.unal.edu.co/" target="_blank"
                      >Procedimiento instructivos y formatos</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Normas de contratación</a>
                  </li>
                  <!-- abre una ventana de los documentos relacionados -->
                </ul>
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  >Sistema de matrículas y otros derechos de pago</a
                >
              </li>
              <!-- abre una ventana de los documentos relacionados -->
              <li><a class="dropdown-item" href="#">Conceptos jurídicos</a></li>
              <!-- abre una ventana de los documentos relacionados -->
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link">Ayuda</a>
          </li>
        </ul>
        <form class="d-flex ml-auto" role="search" id = "navBarSearch">
          <input
            class="form-control me-2"
            type="search"
            placeholder=""
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
        <button v-show="!login" id = "BotonLogin">Iniciar sección</button>
        <div v-show="login" id="info-container">
            <label id="info-name">{{ name }}</label>
            <img src="/src/assets/Vector.svg" alt="Perfil" id="info-picture">
        </div>
      </div>
    </div>
  </nav>
</template>
#navbarNav {

}
<style scoped>

.nav-link {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 16px;

    color: #FFFFFF;
}

#BotonLogin {
    background: #FFFFFF;
    border-radius: 100px;
}

#info-container {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    width: 10%;
}


#info-picture {

  height: 20px;
  width: 20px;
}

#info-name {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  color: #FFFFFF;
}

.navbar-toggler {
  background-color: #FFFFFF; /* Cambiar aquí el color deseado */
}

</style>
<template>
  <h1>
    SISTEMA DE INFORMACIÓN NORMATIVA, JURISPRUDENCIAL Y DE CONCEPTOS DE RÉGIMEN
    LEGAL
  </h1>
  <div class="defaultMain">
    <div class="OpcionesBusqueda">
      <button type="button" class="btn btn-primary" id="BusquedaSimple">
        Busqueda Simple
      </button>
      <button type="button" class="btn btn-primary" id="BusquedaAvanzada">
        Busqueda Avanzada
      </button>
    </div>
    <div>
        <!-- noticias -->
    </div>
  </div>
  <div class="recomendaciones"></div>
</template>

<style scoped>
.OpcionesBusqueda {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
}

h1 {
    width: 90%;
    height: 20%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    text-align: justify;

    color: #FFFFFF;
}
</style>

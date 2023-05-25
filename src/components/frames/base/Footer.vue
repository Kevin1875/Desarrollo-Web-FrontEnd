<script setup></script>

<template>
  <footer class="main-footer">
    <div class="a-container">
      <div class="b-container">
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top">Régimen Legal</a>
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top">Contratación</a>
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top"
            >Rendición de cuentas</a
          >
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top">Pago Virtual</a>
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top">Calidad</a>
        </div>
      </div>
      <div class="b-container">
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top"
            >Talento Humano</a
          >
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top"
            >Ofertas de empleo</a
          >
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top"
            >Concurso docente</a
          >
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top"
            >Control interno</a
          >
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top"
            >Buzón de notificaciones</a
          >
        </div>
      </div>
      <div class="b-container">
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top"
            >Correo institucional</a
          >
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top"
            >Redes Sociales</a
          >
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top"
            >Quejas y reclamos</a
          >
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top">Encuesta</a>
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top">Estadística</a>
        </div>
      </div>
      <div class="b-container">
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top"
            >Mapa del sitio</a
          >
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top">FAQ</a>
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top"
            >Atención en línea</a
          >
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top">Contáctenos</a>
        </div>
        <div class="btn-group">
          <a href="http://www.legal.unal.edu.co" target="_top">Glosario</a>
        </div>
      </div>

      <div></div>

      <div></div>
    </div>

    <div class="c-container">
      <div class="csc-frame csc-frame-indent">
        <p class="bodytext">
            Contacto página web:<br/>
            <a href="www.unal.edu.co">www.unal.edu.co</a><br/>
            Dirección<br/>
            CR 45 No. 26 - 85 - Of. 557 <br/>
            Bogotá D.C.,Colombia<br/>
            (+57 1) 316 5000 ext. 18054
        </p>
      </div>
      <div class="csc-frame csc-frame-indent">
        <p class="bodytext">
          © Copyright 2014<br />Algunos derechos reservados.<br />
          <a
            href="mailto:webmaster@unal.edu.co"
            title="ComunÃ­quese con el webmaster de la Universidad Nacional de Colombia"
            class="mail"
            >webmaster@unal.edu.co</a
          ><br />
          <a
            href="http://unal.edu.co/acerca-de-este-sitio-web/"
            title="Acerca de la web de la Universidad Nacional de Colombia"
            target="_blank"
            class="internal-link"
            >Acerca de este sitio web<br
          /></a>
        </p>
        <div class="csc-default">
          <p>Actualización: DD/MM/AAAA</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.main-footer {
  background: #212121;
  color: #ddd;
  font-size: 0.9em;
  font-weight: 300;
  font-size: 12px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.b-container {
  min-width: 150px;
  width: 25%;
}

.a-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px 20px;
  max-width: 60%;
}

.c-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px 20px;
  width: 40%;
  justify-content: space-around;
}

footer .row {
  margin: 0 25px;
}

footer .gobiernoLinea {
  margin: 20px 0;
  padding: 0;
  vertical-align: baseline;
}

footer a {
  color: #fff !important;
  text-decoration: none;
}

footer .footer-info {
  border-left: 1px solid #4b4b4b !important;
  margin: 20px 0 !important;
  padding: 0 !important;
}

footer .logos {
  margin: 20px 0;
  text-align: center;
}

footer .btn-group {
  margin: 0;
}

footer .footer-info .csc-frame-indent:first-child p {
  margin-left: 10%;
  margin-right: 0;
}

footer .footer-info .csc-frame-indent {
  float: left;
  text-align: right;
  width: 48%;
}

footer .footer-info .csc-frame-indent p {
  line-height: 20px;
  margin-right: 10%;
}
</style>

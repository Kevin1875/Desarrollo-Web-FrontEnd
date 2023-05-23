<script setup>
document.addEventListener('DOMContentLoaded', function() {
    var filas = document.querySelectorAll('.tablita tr:not(:first-child)');
    filas.forEach(function(fila) {
      fila.addEventListener('click', function() {
        // Obtener el valor de redirección de la fila
        var url = this.dataset.redirect;
        // Redireccionar al usuario a la URL deseada
        window.location.href = url;
      });
    });
});

</script>

<template>
    <div class="nn">
        <div class="encima">
            <p>TOTAL 34 REGISTROS ENCONTRADOS</p>
        </div>
        <table class="tablita">
            <colgroup>
                <col style="width: 15%;">
                <col style="width: 20%;">
                <col style="width: 65%;">
            </colgroup>
            <tr>
                <th class="low-head-table col-1">AÑO</th>
                <th class="low-head-table col-2">TIPO</th>
                <th class="low-head-table col-3">CUERPO COLEGIADO</th>
            </tr>
            <tr data-redirect="https://unal.edu.co/">
                <td class="fila-columna">2018</td>
                <td class="fila-columna">Circular</td>
                <td class="fila-columna">Comité Académico Administrativo Sede Medellín</td>
            </tr>
            <tr data-redirect="https://unal.edu.co/">
                <td class="fila-columna">2018</td>
                <td class="fila-columna">Circular</td>
                <td class="fila-columna">Comité Académico Administrativo Sede Medellín</td>
            </tr>
            <tr data-redirect="https://unal.edu.co/">
                <td class="fila-columna">2018</td>
                <td class="fila-columna">Circular</td>
                <td class="fila-columna">Comité Académico Administrativo Sede Medellín</td>
            </tr>
            <tr data-redirect="https://unal.edu.co/">
                <td class="fila-columna">2018</td>
                <td class="fila-columna">Circular</td>
                <td class="fila-columna">Comité Académico Administrativo Sede Medellín</td>
            </tr>
            <tr data-redirect="https://unal.edu.co/">
                <td class="fila-columna">2018</td>
                <td class="fila-columna">Circular</td>
                <td class="fila-columna">Comité Académico Administrativo Sede Medellín</td>
            </tr>
            <tr data-redirect="https://unal.edu.co/">
                <td class="fila-columna">2018</td>
                <td class="fila-columna">Circular</td>
                <td class="fila-columna">Comité Académico Administrativo Sede Medellín</td>
            </tr>
            <tr data-redirect="https://unal.edu.co/">
                <td class="fila-columna">2018</td>
                <td class="fila-columna">Circular</td>
                <td class="fila-columna">Comité Académico Administrativo Sede Medellín</td>
            </tr>
            <tr data-redirect="https://unal.edu.co/">
                <td class="fila-columna">2018</td>
                <td class="fila-columna">Circular</td>
                <td class="fila-columna">Comité Académico Administrativo Sede Medellín</td>
            </tr>
            <tr data-redirect="https://unal.edu.co/">
                <td class="fila-columna">2018</td>
                <td class="fila-columna">Circular</td>
                <td class="fila-columna">Comité Académico Administrativo Sede Medellín</td>
            </tr>
            <tr data-redirect="https://unal.edu.co/">
                <td class="fila-columna">2018</td>
                <td class="fila-columna">Circular</td>
                <td class="fila-columna">Comité Académico Administrativo Sede Medellín</td>
            </tr>
            <tr data-redirect="https://unal.edu.co/">
                <td class="fila-columna">2018</td>
                <td class="fila-columna">Circular</td>
                <td class="fila-columna">Comité Académico Administrativo Sede Medellín</td>
            </tr>
            <tr data-redirect="https://unal.edu.co/">
                <td class="fila-columna">2018</td>
                <td class="fila-columna">Circular</td>
                <td class="fila-columna">Comité Académico Administrativo Sede Medellín</td>
            </tr>
        </table>
    </div>


</template>

<style scoped>
.encima{
    background-color: rgba(217, 217, 217, 0.15);
    margin-bottom: -10px;
    margin-left: 4px;
    margin-right: 4px;
    border-radius: 10px 10px 0px 0px;
    border: 2px solid;
    border-color: #0500FF;
    font-weight: bold;
    font-size: medium;
    color: white;
    height: 45px;
}

.encima p{
    text-align: center;
    margin: 0;
    padding-top: 9px;
}
.nn{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    flex-direction: column;
    width: 90%;
    margin-left: auto; /* Agregado para centrar horizontalmente */
    margin-right: auto; /* Agregado para centrar horizontalmente */
}


.tablita{
    border-collapse: separate;
    border-spacing: 5px 10px;
    color: white;
    transition: all 0.7s ease;

}

.tablita tr:not(:first-child):hover {
    transform: scale(1.03);
    transition: all 0.3s ease;
    cursor: pointer;

}

.fila-columna{
    height: 40px;
    background-color: rgba(217, 217, 217, 0.15);
    text-align: center;

}

.low-head-table{
    background-color: rgba(217, 217, 217, 0.15);
    height: 40px;
    text-align: center;
}

.col-1{
    border-radius: 0px 0px 0px 10px;
}

.col-3{
    border-radius: 0px 0px 10px 0px;
}

.tablita tr td:first-child {
    border-radius: 10px 0px 0px 10px;
}

.tablita tr td:last-child {
    border-radius: 0px 10px 10px 0px;
}
</style>
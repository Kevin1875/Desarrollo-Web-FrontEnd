<template>
    <button class="xd">
        <slot name="name-button"></slot>
    </button>
</template>

<style>
.xd{
    background-color: white;
    padding: 5px 10px;
    color: #16264b;
    font-weight: 600;
    font-size: 16;
    border-radius: 10px;
    border: 0;
    transition: all 0.3s ease;

}

.xd:hover{
    background-color: rgb(223, 223, 223);
    color: #16264b;
}

.xd:active{
    background-color: #16264b;
    color: white;
}

</style>

<!--
    <template>
        <div class="card">
            <div class="card-header">
            <slot name="header"></slot>
            </div>
            <div class="card-body">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <button @click="addToCart">Agregar al carrito</button>
            </div>
        </div>
    </template>
-->

    <!--
    <template>
        <Card :product="product">
            <template v-slot:header>
                <h1>{{ product.name }}</h1>
                <img :src="product.image" :alt="product.name">
            </template>
        </Card>
    </template>
    -->

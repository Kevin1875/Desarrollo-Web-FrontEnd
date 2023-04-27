<template>
    <button class="xd">
        <slot name="name-button"></slot>
    </button>
</template>

<style>
.xd{
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;
    color: white;
    font-weight: 600;
    font-size: 16;
    border-radius: 15px;
    border-color: blue;
}

.xd:active{
    border-color: blue;
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

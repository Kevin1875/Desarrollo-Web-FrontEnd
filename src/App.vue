<script setup>
import { reactive } from "vue";

const user = reactive({ name: "Cupidatat sit", status: false });

const updateUser = value => {user.status=value}

</script>

<template>
  <navBar :name="user.name" :status="user.status" @Update="updateUser"></navBar>
  <mainMenu :status="user.status"></mainMenu>
  <!-- <simple></simple>
  <advance></advance> -->
</template>

<style scoped></style>

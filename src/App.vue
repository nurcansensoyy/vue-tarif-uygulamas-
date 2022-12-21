<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}
body {
  background-color: currentColor;
  color: #fff;
}
a {
  color: peachpuff;
  text-decoration: none;
}
button {
  appearance: none;
  border: none;

  background: none;
  cursor: pointer;

  background-color: #faa9fe;
  font-size: 1.125rem;

  color: #ffffff;

  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>

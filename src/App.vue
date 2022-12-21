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
  font-family: Blippo, fantasy;
}
body {
  background-color: currentColor;
  color: #00a388;
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

  background-color: #5b4342;
  font-size: 1.125rem;

  color: #fae7e7;

  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>

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
  background-color: #d1d9d7;
  color: #715854;

  background-image: url("https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
a {
  color: black;
  text-decoration: none;
}
button {
  appearance: none;
  border: none;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: none;
  cursor: pointer;

  background-color: #9a0113;
  font-size: 1.125rem;

  color: #fcedda;

  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>

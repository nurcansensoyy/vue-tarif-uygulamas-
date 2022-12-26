<template>
  <div class="sign_in">
    <form>
      <h3>Kayıt Ol</h3>
      <label for="email">E-mail:</label><br />
      <input type="email" id="email" v-model="email" /><br />
      <label for="parola">Parola:</label><br />
      <input type="password" id="parola" v-model="parola" /><br /><br />
      <button @click="signIn">Sign In</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const parola = ref("");

    function signIn() {
      // Add your sign in logic here
    }

    return {
      email,
      parola,
      signIn,
    };
  },
};
</script>

<style>
.sign_in {
  position: fixed;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.sign_in form {
  background-color: #9a0113;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 9rem;
  border-radius: 1rem;
}
.sign_in form h3 {
  font-size: 3rem;
  color: #fcedda;
  text-align: center;
  margin-top: 0;
  margin-bottom: 4rem;
}
.sign_in form label {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.5rem;
  color: #fcedda;
}
.sign_in form input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.sign_in form button {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #9a0113;
  position: absolute;
  height: 50px;
  width: 130px;
}
</style>

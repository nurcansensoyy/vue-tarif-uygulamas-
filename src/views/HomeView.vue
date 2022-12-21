<template>
  <div class="home">
    <h1>Tariflerim</h1>
    <button>Yeni Tarif Ekle</button>

    <div class="tarifler">
      <!-- Tarifler -->
    </div>
    <div class="tarif-popup">
      <div class="popup-konu">
        <h2>Yeni Tarif Ekle</h2>
        <form @submit.prevent=""></form>
        <div class="grup">
          <label>Başlık</label>
          <input type="text" />
        </div>
        <div class="grup">
          <label>Açıklama</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="grup">
          <label>İçindekiler</label>
          <input type="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { def } from "@vue/shared";

export default {
  name: "Home",
};
</script>

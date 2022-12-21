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
        <form @submit.prevent="">
          <div class="grup">
            <label>Başlık</label>
            <input type="text" />
          </div>
          <div class="grup">
            <label>Açıklama</label>
            <textarea></textarea>
          </div>
          <div class="grup">
            <label>İçindekiler</label>
            <div class="icindekiler">
              <input type="text" />
              <button type="button">Malzeme Ekle</button>
            </div>
          </div>
          <div class="grup">
            <label>Yapımı</label>
            <div class="yapimi">
              <textarea></textarea>
            </div>
            <button type="button">Adım Ekle</button>
          </div>
          <button type="submit">Tarif Ekle</button>
          <button type="button">Kapat</button>
        </form>
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

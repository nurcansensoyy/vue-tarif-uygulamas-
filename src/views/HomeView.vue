<template>
  <div class="home">
    <h1>Tariflerim</h1>
    <button @click="togglePopup">Yeni Tarif Ekle</button>

    <div class="tarifler">
      <div
        class="kart"
        v-for="tarif in $store.state.tarifler"
        :key="tarif.slug"
      >
        <h2>{{ tarif.baslik }}</h2>
        <p>{{ tarif.aciklama }}</p>
        <router-link :to="`/tarif/${tarif.slug}`">
          <button>Tarifi Görüntüle</button>
        </router-link>
      </div>
    </div>

    <div class="popup" v-if="popupAcik">
      <div class="popup-icerik">
        <h2>Yeni Tarif Ekle</h2>

        <form @submit.prevent="yeniTarifEkle">
          <div class="grup">
            <label>Başlık</label>
            <input type="text" v-model="yeniTarif.baslik" />
          </div>
          <div class="grup">
            <label>Açıklama</label>
            <textarea v-model="yeniTarif.aciklama"></textarea>
          </div>
          <div class="grup">
            <label>İçindekiler</label>
            <div
              class="icindekiler"
              v-for="i in yeniTarif.icindekiler_satir"
              :key="i"
            >
              <input type="text" v-model="yeniTarif.icindekiler[i - 1]" />
            </div>
            <button type="button" @click="yeniMalzemeEkle">Malzeme Ekle</button>
          </div>
          <div class="grup">
            <label>Yapımı</label>
            <div class="yapimi" v-for="i in yeniTarif.yapimi_satir" :key="i">
              <textarea v-model="yeniTarif.yapimi[x - 1]"></textarea>
            </div>
            <button type="button" @click="yeniAdimEkle">Adım Ekle</button>
          </div>

          <button type="submit">Tarif Ekle</button>
          <button type="button" @click="togglePopup">Kapat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "Vuex";

export default {
  name: "Home",
  setup() {
    const yeniTarif = ref({
      baslik: "",
      aciklama: "",
      icindekiler: [],
      yapimi: [],
      icindekiler_satir: 1,
      yapimi_satir: 1,
    });
    const popupAcik = ref(false);
    const store = useStore();

    const togglePopup = () => {
      popupAcik.value = !popupAcik.value;
    };

    const yeniMalzemeEkle = () => {
      yeniTarif.value.icindekiler_satir++;
    };

    const yeniAdimEkle = () => {
      yeniTarif.value.yapimi_satir++;
    };

    const yeniTarifEkle = () => {
      yeniTarif.value.slug = yeniTarif.value.baslik
        .toLowerCase()
        .replace(/\s/g, "-");

      if (!yeniTarif.value.slug) {
        alert("Tarif ekleyin lütfen.");
        return;
      }
      store.commit("TARIF_EKLE", { ...yeniTarif.value });

      yeniTarif.value = {
        baslik: "",
        aciklama: "",
        icindekiler: [],
        yapimi: [],
        icindekiler_satir: 1,
        yapimi_satir: 1,
      };
      togglePopup();
    };
    return {
      yeniTarif,
      togglePopup,
      popupAcik,
      yeniMalzemeEkle,
      yeniAdimEkle,
      yeniTarifEkle,
    };
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 32px;
}
.tarifler {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.tarifler .kart {
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  background-color: #c19a92;
}
.tarifler .kart h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.tarifler .kart p {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #d1d9d7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup .popup-icerik {
  background-color: #c19a92;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 768px;
}
.popup-icerik h2 {
  color: #715854;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.popup-icerik .grup {
  margin-bottom: 1rem;
}
.popup-icerik .grup label {
  display: block;
  margin-bottom: 0.5rem;
  color: #715854;
}

.popup-icerik .grup input,
.popup-icerik .grup textarea {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
.popup-icerik .grup textarea {
  height: 100px;
  resize: none;
}
.popup-icerik button[type="submit"] {
  margin-right: 1rem;
}
</style>

<template>
  <body>
    <div class="tarif">
      <router-link to="/">&lt; Geri</router-link>
      <h1>{{ tarif.baslik }}</h1>
      <p class="desc">{{ tarif.aciklama }}</p>
      <hr />
      <div class="icindekiler">
        <h3>İçindekiler</h3>
        <ul>
          <li v-for="(icerik, i) in tarif.icindekiler" :key="i">
            {{ icerik }}
          </li>
        </ul>
      </div>
      <div class="yapimi">
        <h3>Yapımı</h3>
        <ol>
          <li v-for="(adim, i) in tarif.yapimi" :key="i">
            {{ adim }}
          </li>
        </ol>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  computed: {
    tarif() {
      return this.$store.state.tarifler.find(
        (tarif) => tarif.slug === this.$route.params.slug
      );
    },
  },
};
</script>

<style>
body {
  background-image: url("https://images.pexels.com/photos/326281/pexels-photo-326281.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.tarif {
  padding: 1rem;
  max-width: 768px;
  margin: 0 auto;
  background-color: #fdc87e59;
}
.desc {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  color: #9a0113;
}
hr {
  margin-bottom: 1rem;
  background-color: #c19a92;
}
h3 {
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.838);
}

.icindekiler ul li {
  list-style-position: inside;
  line-height: 1.4;
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.838);
}
.yapimi ol li {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  list-style-position: inside;
  border-bottom: 1px solid #eee;
  color: rgba(0, 0, 0, 0.838);
}
</style>

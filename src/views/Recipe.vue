<template>
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
</template>

<script>
export default {
  computed: {
    tarif() {
      return this.$store.state.tarifler.find(
        (recipe) => recipe.slug === this.$route.params.slug
      );
    },
  },
};
</script>

<style>
.tarif {
  padding: 1rem;
  max-width: 768px;
  margin: 0 auto;
}
.desc {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
hr {
  margin-bottom: 1rem;
  background-color: #c19a92;
}
h3 {
  margin-bottom: 1rem;
}
.icindekiler {
  padding: 1rem;
  background-color: #c19a92;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}
.icindekiler ul li {
  list-style-position: inside;
  line-height: 1.4;
  margin-bottom: 1rem;
}
.yapimi ol li {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  list-style-position: inside;
  border-bottom: 1px solid #eee;
}
</style>

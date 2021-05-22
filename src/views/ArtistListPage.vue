<template>
  <section class='overview'>
    <header>
    <h2>All Artists</h2>
    </header>
    <main>
        <ArtistList :artists="artists" />
    </main>
    
  </section>
</template>

<script>
import ArtistList from "../components/ArtistList.vue";

export default {
  name: "App",
  components: {
    ArtistList
  },
  methods: {
    async fetchArtists() {
      const res = await fetch("http://localhost:5000/artists");
      const data = await res.json();

      return data;
    }
  },
  data() {
    return {
      artists: Object
    };
  },
  async created() {
    this.artists = await this.fetchArtists();
  }
};
</script>

<style lang="scss">
@import "../shared/_styles.scss";


</style>

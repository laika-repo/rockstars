<template>
  <section class='overview'>
    <header>
    <h2>Artists</h2>
    </header>
    <main>
        <h3 class='list-header'>All artists</h3>
        <div class='filter-wrapper'>
          <input class='filter' type="text" placeholder="Filter artists" />        
        </div>
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



.filter-wrapper {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: stretch;
  
  margin-bottom: $padding--large;

  .filter {
    padding: $padding--regular;
  }
}


</style>

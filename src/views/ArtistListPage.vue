<template>
  <section class="overview">
    <header>
      <h2>Artists</h2>
    </header>
    <main>
      <h3 class="list-header">All artists</h3>
      <div class="filter-wrapper">
        <input class="filter" type="text" v-model="search" placeholder="Filter artists" />
        <h4 class='current-filter'>Current filter: <strong>{{currentFilter}}</strong></h4>
      </div>
      <ArtistList :artists="filteredArtists" />
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
      artists: [],
      search: ''
    };
    
  },

  computed: {
    filteredArtists() {
      return this.artists.filter(artist => artist.name.toLowerCase().includes(this.search.toLowerCase()));
    },

    currentFilter() {
      return this.search.length ? this.search : '';
    }
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

  .current-filter {
    color: white;
    font-weight: 300;

    strong {
      font-weight: bold;
    }
  }

  .filter {
    padding: $padding--regular;
  }
}
</style>

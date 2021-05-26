<template>
  <section class="overview">
    <header>
      <h2>{{ artist.name }}</h2>
    </header>

    <main>
    <h3 class='list-header'>All songs by {{artist.name}}</h3>
      <SongList :songs="songs" />
      <SongList />
    </main>
  </section>
</template>

<script>
import SongList from "../components/SongList.vue";

export default {
  name: "App",
  components: {
    SongList
  },
  methods: {
    async fetchSongs() {
      const res = await fetch(
        `http://localhost:5000/songs?artist=${this.artist.name}`
      );
      const data = await res.json();

      return data;
    },
    async fetchArtist() {
      const res = await fetch(
        `http://localhost:5000/artists/${this.$route.params.id}`
      );
      const data = await res.json();

      return data;
    }
  },

  data() {
    return {
      artists: Object,
      songs: [],
      artist: Object
    };
  },
  async mounted() {
    this.artist = await this.fetchArtist();
    this.songs = await this.fetchSongs();
  }
};
</script>

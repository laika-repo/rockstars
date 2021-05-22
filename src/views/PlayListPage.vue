<template>
  <section class="overview">
    <header>
      <h2>{{playlist.name}}</h2>
    </header>

    <main>
    <h3 class='list-header'>SONGS</h3>
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
    async fetchPlaylist() {
      const res = await fetch(
        `http://localhost:5000/playlists/${this.$route.params.id}`
      );
      const data = await res.json();

      return data;
    }
  },

  data() {
    return {
      songs: Object,
      playlist: Object
    };
  },
  async mounted() {
    this.playlist = await this.fetchPlaylist();
    this.songs = await this.playlist.songs;
  }
};
</script>

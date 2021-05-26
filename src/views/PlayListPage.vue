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

    <button v-on:click="show = !show">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
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
      show: false,
      songs: [],
      playlist: Object
    };
  },
  async created() {
    this.playlist = await this.fetchPlaylist();
    this.songs = await this.playlist.songs;
  }
};
</script>
<style scoped lang="scss">

    p {
      color: red;
    }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

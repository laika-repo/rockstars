<template>
  <main class="overview">
<header>
    <h2>All playlists</h2>
    </header>
    <PlayLists :playlists="playlists" />
    <PlayLists />
  </main>
</template>

<script>
import PlayLists from "../components/PlayLists.vue";

export default {
  name: "PlayListPage",
  components: {
    PlayLists
  },
  methods: {
    async fetchPlaylists() {
      const res = await fetch(
        `http://localhost:5000/playlists`
      );
      const data = await res.json();

      return data;
    }
  },

  data() {
    return {
      playlists: Object
    };
  },
  async created() {
    this.playlists = await this.fetchPlaylists();
  }
};
</script>

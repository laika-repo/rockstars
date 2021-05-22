<template>
  <section class="overview">
    <header>
      <h2>All playlists</h2>
    </header>
    <main>
        <h3 class='list-header'>All playlists</h3>
        <PlayLists :playlists="playlists" />
    </main>
  </section>
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
      const res = await fetch(`http://localhost:5000/playlists`);
      const data = await res.json();

      return data;
    }
  },

  data() {
    return {
      playlists: Object
    };
  },
  async mounted() {
    this.playlists = await this.fetchPlaylists();
  }
};
</script>

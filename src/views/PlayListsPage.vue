<template>
  <section class="overview">
    <header>
      <h2>All playlists</h2>
    </header>
    <main>
      <ListHeader title="All playlists" />
      <AddListItem @addPlayList="addItem" />
      <PlayLists :playlists="playlists" />
    </main>
  </section>
</template>

<script>
import PlayLists from "../components/PlayLists.vue";
import ListHeader from "../components/ListHeader.vue";
import AddListItem from "../components/AddListItem.vue";

export default {
  name: "PlayListPage",
  components: {
    PlayLists,
    ListHeader,
    AddListItem
  },

  data() {
    return {
      playlists: []
    };
  },

  methods: {
    addItem(playlist) {
      this.playlists.push(playlist);
    }
  },

  mounted() {
    this.$http
      .get("/playlists")
      .then(response => (this.playlists = response.data));
  }
};
</script>

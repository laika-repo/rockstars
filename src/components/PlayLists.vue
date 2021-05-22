<template>
  <section class="list">
    <div class="list-item" :key="playlist.id" v-for="playlist in playlists">
      <PlayListsItem :playlist="playlist" />
    </div>
  </section>
</template>

<script>
import PlayListsItem from "./PlayListsItem";

export default {
  name: "PlayLists",
  props: {
    playlists: Array
  },

  components: { PlayListsItem }
};
</script>

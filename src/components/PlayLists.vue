<template>
  <section class="list">
    <div class="list-item" :key="playlist.id" v-for="playlist in playlists">
      <PlayListsItem :playlist="playlist" @remove="removeFromList" />
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

  components: { PlayListsItem },

  methods: {
    removeFromList(playlist){
      console.log(playlist);
    }
  },
};
</script>

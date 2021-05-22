<template>
  <section class='list'>
    <div class='list-item' :key="song.id" v-for="song in songs">
      <SongListItem :song="song" />
    </div>
  </section>
</template>

<script>
import SongListItem from "./SongListItem";

export default {
  name: "SongList",
  props: {
    songs: Array
  },

  components: { SongListItem }
};
</script>

<style scoped lang="scss">
    @import "../shared/_styles.scss";

section {
  background-color: $main-gray;
}

</style>

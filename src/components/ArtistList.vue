<template>
  <section class="list">
    <div class="list-item" :key="artist.id" v-for="artist in artists">
      <ArtistListItem :artist="artist" />
    </div>
  </section>
</template>

<script>
import ArtistListItem from "./ArtistListItem";

export default {
  name: "ArtistList",
  props: {
    artists: Array
  },

  components: { ArtistListItem }
};
</script>

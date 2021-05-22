<template>
  <div class='list-item-link-wrapper'>
  {{playlist.name}}
    <!-- router-link :to="{ name: 'ArtistPage', params: { id: artist.id }}">{{artist.name}}</router-link -->
  </div>
</template>

<script>
export default {
  name: "PlaylistsItem",
  props: {
    playlist: Object
  },
};
</script>

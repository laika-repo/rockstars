<template>
  <div class='list-item-link-wrapper'>
    <router-link :to="{ name: 'ArtistPage', params: { id: artist.id }}">{{artist.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: "ArtistListItem",
  props: {
    artist: Object
  },
};
</script>

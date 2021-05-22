<template>
  <div class='list-item-link-wrapper'>
    <router-link :to="{ name: 'PlayListPage', params: { id: playlist.id }}">{{playlist.name}}</router-link>
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

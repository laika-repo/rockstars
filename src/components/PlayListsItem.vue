<template>
  <div class="list-item-link-wrapper">
    <router-link :to="{ name: 'PlayListPage', params: { id: playlist.id } }">{{
      playlist.name
    }}</router-link>
    <RemoveListItem @delete="deleteItem()" />
  </div>
</template>

<script>
  import RemoveListItem from "../components/RemoveListItem.vue";

export default {
  name: "PlaylistsItem",
  props: {
    playlist: Object
  },
  components: {
    RemoveListItem
  },
  methods: {
    deleteItem() { 
      if(confirm('are you sure?')) {
        this.axios({method: 'DELETE', url: 'http://localhost:5000/playlists/' + this.playlist.id})
      .then(this.$emit('remove', this.playlist));
      }
      
    }
  }
};
</script>

<template>
<span @click="handleClick" >
    <InlineIcon icon='remove' />
</span>
</template>

<script>
import InlineIcon from "../components/InlineIcon.vue";
export default {
  name: "PlaylistsItem",
  props: {
    playlist: Object
  },

  methods: {
      handleClick() {
          this.$emit('delete');
    }
  },
  components: {
    InlineIcon
  }
}
</script>
<template>
  <div class='list-item-link-wrapper'>
    <strong>{{song.name}}</strong> <svg viewBox="0 0 32 32"><path d="M32 12.408l-11.056-1.607L16 .783l-4.944 10.018L0 12.408l8 7.798-1.889 11.011L16 26.018l9.889 5.199L24 20.206l8-7.798z"/></svg>
  </div>
</template>

<script>
export default {
  name: "SongListItem",
  props: {
    song: Object
  },
};
</script>

<style scoped lang="scss">
    @import "../shared/_styles.scss";

svg {
    display: inline-block;
    fill: #333;
    width: 24px;
    height: 24px;

    &:hover {
        fill: $main-yellow;
    }
}


</style>

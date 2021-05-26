<template>
  <header class="list-header">
    <h3 class="list-header">{{title}}</h3>
  </header>
</template>

<script>
export default {
  name: "ListHeader",
  props: ['title']
};
</script>

<style scoped lang="scss">
    @import "../shared/_styles.scss";

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing--large;

  h3 {
    margin: 0;
  }
}    




</style>


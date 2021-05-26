<template>
  <svg viewBox="0 0 32 32">
    <path :d="IconSVG" />
  </svg>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true }
  },
  data() {
    return {
      icons: {
        remove:
          "M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm8 18H8v-4h16v4z",
        add:
          "M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm8 18h-6v6h-4v-6H8v-4h6V8h4v6h6v4z"
      }
    };
  },
  computed: {
    IconSVG() {
      return this.icons[this.icon];
    }
  }
};
</script>

<style scoped lang="scss">
@import "../shared/_styles.scss";

svg {
  fill: $main-yellow;
  width: 24px;
  width: 24px;

  &:hover {
    cursor: pointer;
  }
}
</style>

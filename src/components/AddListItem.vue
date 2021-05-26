<template>
  <form v-on:submit.prevent="submitForm">
    <input id="name" v-model="form.name" placeholder="Create new playlist" />
    <button>
      <InlineIcon icon='add'/>
    </button>
  </form>
</template>

<script>
import InlineIcon from "../components/InlineIcon.vue";

export default {
  name: "AddListItem",
  data() {
    return {
      form: {
        name: ""
      }
    };
  },
  components: {
    InlineIcon
  },
  methods: {
    submitForm() {
      if (this.form.name.length) {
        this.axios
          .post("http://localhost:5000/playlists", this.form)
          .then(response => {
            this.$emit('addPlayList', response.data)
          });
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../shared/_styles.scss";

form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing--large;
}

button {
  background: none;
  border: none;
  padding: 0;
}
input {
  flex-grow: 1;
  padding: $spacing;

  border: 1px solid $main-gray--darker;
  background: $background-gray;
  box-shadow: none;
  margin-right: $spacing;

  &::placeholder {
    font-style: italic;
    font-size: 1rem;
  }
}
</style>

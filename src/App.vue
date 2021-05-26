<template>
  <div id="app">
    <header class="page-header">
      <div class="logo-wrapper">
        <LogoMain />
      </div>
      <div class="navigation">
        <router-link to="/artists">Artist overview</router-link> |
        <router-link to="/playlists">Playlist overview</router-link>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
import LogoMain from "./components/LogoMain.vue";

export default {
  name: "App",
  components: {
    LogoMain
  }
};
</script>

<style lang="scss">
@import "./shared/_styles.scss";

h1,
h2,
h3 {
  margin: 0;
}

html {
  padding: 0;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: $main-gray;
  margin: 0;
}

#app {
  color: $main-gray;
}

.page-header {
  background-color: $main-yellow;
  padding: $spacing--large;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  a {
    text-transform: uppercase;
    font-size: 10px;

    @include sm {
      font-size: 12px;
    }

    font-weight: bold;

    &:visited,
    &:active {
      color: $main-gray;
    }

    &.router-link-exact-active {
      text-decoration: none;
    }
  }
}

h1 {
  font-size: 48px;
  line-height: 1em;
  text-transform: uppercase;
  font-weight: 900;
  text-align: left;
}

.overview {
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0;

  @include md {
    flex-direction: row;
  }

  & > header {
    background-color: $main-yellow;
    padding: $spacing--large $spacing--xlarge;
  

    @include md {
      width: 25vw;
    }
  }

  h2 {
    text-align: left;
    margin: 0;
    color: $main-gray;
    line-height: 1em;
    font-size: 32px;
    font-weight: 900;
    text-transform: uppercase;
  }
}

h3.list-header {
  color: white;
  font-size: 24px;
  margin-bottom: $spacing--large;
}

main {
  margin: $spacing--xxlarge $spacing--xlarge;
  min-width: 33vw;
}

.list {
  display: flex;
  flex-direction: column;
}

.list-item {
  border-top: 1px solid white;
  text-align: left;
  color: white;

  a {
    font-weight: 900;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
  }
}

.list-item-link-wrapper {
  padding: $spacing--large 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

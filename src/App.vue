<template>
  <div id="app">
    <header id="nav">
      <router-link to="/">Artist overview</router-link>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">  
@import "./shared/_styles.scss";

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

#nav {
  background-color: $main-yellow;
  padding: $padding--large 0;
  text-align: center;

  a {
    text-transform: uppercase;
    font-size: 12px;    
    font-weight: bold;


    &:visited, &:active {
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

    & > header {
        background-color: $main-yellow;
        padding: $padding--large $padding--xlarge;
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

.list {
  display: flex;
  flex-direction: column;
  padding: $padding--xlarge $padding--xxlarge;
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
  padding: $padding--large 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>




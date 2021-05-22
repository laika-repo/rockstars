<template>
  <router-link to="/artists"><img class='logo' src='../assets/logo-rockstars.png'></router-link>
</template>

<style lang="scss">  
  @import "../shared/_styles.scss";

  img.logo {
    width: 70px;

    @include sm {
      width: 100px;
    }

    margin-top: -10px;
  }
</style>
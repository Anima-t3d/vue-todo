<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
$material-design-icons-font-path: "~material-design-icons-iconfont/dist/fonts/";

@import "~material-design-icons-iconfont/src/material-design-icons";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

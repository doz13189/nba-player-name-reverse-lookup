<template>

  <div class="container is-size-7-mobile">

    <div class="has-text-centered m-3">
      <img alt="Vue logo" src="@/assets/logo.png" width="50">
    </div>

    <div id="nav" class="has-text-centered m-3">

      <router-link to="/">Search</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/administrator">Administrator</router-link>

    </div>

    <router-view/>

    <div class="has-text-centered m-5">
      <p class="is-5 has-text-black">
        Copyright © since 2021 Takahiro Kato All Rights Reserved.
      </p>
    </div>

  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>

  <img alt="Vue logo" src="@/assets/logo.png" width="50" class="mt-5">

  <div id="nav">

    <router-link to="/">Search</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/administrator">Administrator</router-link>

  </div>

  <router-view/>

  <p class="is-5 has-text-black m-5">
    Copyright © since 2021 Takahiro Kato All Rights Reserved.
  </p>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <v-app id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/todos">TodoList</router-link>
    </div>
    <router-view/>
  </v-app>
</template>

<style>

#app {
  margin: 0;
  padding: 0;
}

</style>

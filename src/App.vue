<template>
  <v-app id="app">
    <Header />
    <Main />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";

export default {
  components: { Footer, Header, Main },
};
</script>

<style scoped>
#app {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
</style>

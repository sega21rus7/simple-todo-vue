<template>
  <v-main>
    <v-tabs centered>
      <v-tab v-for="tab in tabs" :key="tab.name" :to="tab.route">
        {{ tab.name }}
      </v-tab>
    </v-tabs>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      tabs: [
        { name: "Home", route: "/" },
        { name: "TodoList", route: "/todos" },
      ],
    };
  },
};
</script>

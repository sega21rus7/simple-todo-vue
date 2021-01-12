<template>
  <div>
    <h1>TodoList</h1>
    <v-btn block color="primary">
      Block Button
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    // HelloWorld
  },
})
export default class Home extends Vue {}
</script>

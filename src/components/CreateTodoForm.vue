<template>
  <v-form @submit.prevent="submit">
    <v-text-field
      :rules="titleRules"
      v-model="title"
      placeholder="Please type todo title"
    ></v-text-field>
    <v-btn type="submit">Create</v-btn>
  </v-form>
</template>

<script lang="ts">
import { TodoType } from "@/interfaces";

export default {
  data() {
    return {
      titleRules: [(v: string) => !!v || "This is required"],
      title: "",
    };
  },
  methods: {
    submit() {
      if (this.title.trim()) {
        const todo: TodoType = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        this.$emit("createTodo", todo);
        this.title = "";
      }
    },
  },
};
</script>

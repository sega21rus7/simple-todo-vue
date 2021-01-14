<template>
  <v-form @submit.prevent="submit">
    <v-card>
      <v-card-title>Edit todo</v-card-title>
      <v-card-text>
        <v-text-field
          :rules="titleRules"
          v-model="title"
          placeholder="Please type todo title"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="close"> Close </v-btn>
        <v-btn color="green darken-1" type="submit" text> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      titleRules: [(v: string) => !!v || "This is required"],
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    submit() {
      this.$emit("editTodo", this.title);
    },
  },
};
</script>

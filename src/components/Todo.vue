<template>
  <li>
    <v-row>
      <v-col :class="{ completed: todo.completed }">
        <input type="checkbox" v-model="todo.completed" />
        <span class="title" @click="swtichCompleted">
          {{ todo.title }}
        </span>
      </v-col>
      <v-col>
        <v-dialog v-model="editing" max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="info"
              @click="openEditTodoForm"
            >
              Edit
            </v-btn>
          </template>
          <EditTodoFormDialog
            :title="todo.title"
            @close="closeEditTodoForm"
            @editTodo="editTodo"
          />
        </v-dialog>

        <v-btn color="error" @click="removeTodo(todo.id)"> Delete </v-btn>
      </v-col>
    </v-row>
  </li>
</template>

<script lang="ts">
import EditTodoFormDialog from "./EditTodoFormDialog.vue";

export default {
  components: {
    EditTodoFormDialog,
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    swtichCompleted() {
      this.todo.completed = !this.todo.completed;
    },
    removeTodo(id: number) {
      this.$emit("removeTodo", id);
    },
    openEditTodoForm() {
      this.editing = true;
    },
    closeEditTodoForm() {
      this.editing = false;
    },
    editTodo(title: string) {
      this.$emit("editTodo", this.todo.id, title);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
input {
  border-radius: 5px;
  margin-right: 1rem;
}
.v-btn {
  margin-right: 5px;
}
.completed {
  text-decoration: line-through;
}
.title {
  cursor: pointer;
}
</style>

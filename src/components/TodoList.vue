<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <CreateTodoForm @createTodo="createTodo" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <v-container>
              <ul v-if="Object.keys(todos).length">
                <Todo
                  v-for="todo in Object.values(todos)"
                  :key="todo.title"
                  :todo="todo"
                  @removeTodo="removeTodo"
                  @editTodo="editTodo"
                />
              </ul>
              <v-alert v-else type="error"> Todo items doesn't exist. </v-alert>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Todo from "./Todo.vue";
import CreateTodoForm from "./CreateTodoForm.vue";
import { TodoType, TodoObjType } from "@/interfaces";

export default {
  components: { Todo, CreateTodoForm },
  data(): { todos: TodoObjType } {
    return {
      todos: {},
    };
  },
  methods: {
    removeTodo(id: number) {
      Vue.delete(this.todos, id);
    },
    createTodo(todo: TodoType) {
      Vue.set(this.todos, todo.id, todo);
      console.log(Object.values(this.todos));
    },
    editTodo(id: number, title: string) {
      this.todos[id].title = title;
    },
  },
};
</script>

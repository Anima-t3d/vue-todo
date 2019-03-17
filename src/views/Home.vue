<template>
  <div class="home">
    <todo-list
      :items="getTodoItems"
      title="Todo's"
      @update="onUpdateItem"
      @remove="onRemoveItem"
    />
    <div class="actions">
      <input
        type="text"
        v-model="newTodo.title"
        placeholder="E.g. Remember the cookies"
      />
      <button :disabled="!canAdd" @click="onAddToList">Add</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { createTodo } from "../../config";
import TodoList from "@/components/TodoList.vue";

export default {
  name: "home",
  components: {
    TodoList
  },
  data() {
    return {
      newTodo: createTodo()
    };
  },
  computed: {
    canAdd() {
      return !!this.newTodo.title;
    },
    getTodoItems() {
      return this.$store.state.todos;
    }
  },
  methods: {
    onUpdateItem($event) {
      this.updateItem({ ...$event });
    },
    async updateItem({ id, field, value }) {
      if (!id) {
        console.error("[updateItem] Expected id");
        return;
      }
      if (!field) {
        console.error("[updateItem] Expected field");
        return;
      }
      if (typeof value !== "boolean") {
        console.error("[updateItem] Expected boolean value");
        return;
      }
      if (field !== "isDone") {
        console.error("[updateItem] only updating of isDone is supported");
        return;
      }

      try {
        await this.$store.dispatch("updateTodoStatus", { id, isDone: value });
      } catch (error) {
        console.error(error);
      }
    },
    async onAddToList() {
      try {
        await this.$store.dispatch("addTodo", {todo: this.newTodo});
      } catch (error) {
        console.error(error);
      }
      this.newTodo = createTodo();
    },
    async onRemoveItem({ id }) {
      try {
        await this.$store.dispatch("removeTodo", { id });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scope lang="scss">
.actions {
  display: flex;
  flex-direction: row;

  input {
    display: flex;
    flex: 1 1 auto;
  }

  button {
    display: flex;
    flex: 0 0 auto;
    padding: 8px;
    background: greenyellow;
  }
}
</style>

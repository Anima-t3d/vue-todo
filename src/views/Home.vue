<template>
  <div class="home">
    <todo-list :items="todoItems" title="Todo's" @update="onUpdateItem" @remove="onRemoveItem" />
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
import TodoList from "@/components/TodoList.vue";

// TODO: move to constants config
const NEW_TODO = {
  // TODO: use better id generator
  id: "" + new Date().getTime(),
  title: "",
  isDone: false
};

export default {
  name: "home",
  components: {
    TodoList
  },
  data() {
    return {
      todoItems: [
        {
          id: "1",
          title: "Remember the milk!",
          isDone: false
        },
        {
          id: "2",
          title: "Remember the bread!",
          isDone: true
        }
      ],
      newTodo: NEW_TODO,

      // Status
      isAdding: false
    };
  },
  computed: {
    canAdd() {
      console.log("can add", this.newTodo.title);
      return !!this.newTodo.title;
    }
  },
  methods: {
    onUpdateItem($event) {
      this.updateItem({ ...$event });
    },
    updateItem({ id, field, value }) {
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
      const todo = this.todoItems.find(todo => {
        return todo.id === id;
      });
      todo[field] = value;
    },
    onAddToList() {
      this.todoItems.push(this.newTodo);
      this.isAdding = false;
      this.newTodo = { ...NEW_TODO, title: "" };
    },
    onRemoveItem({id}) {
      this.todoItems = this.todoItems.filter(todo => todo.id !== id);
    },
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

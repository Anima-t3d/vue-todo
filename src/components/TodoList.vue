<template>
  <div class="todo-list">
    <h3 class="todo-list__title">
      {{ title }}
    </h3>
    <ul class="todo-list__items">
      <template v-for="todo in items">
        <todo-item
          :key="todo.id"
          :id="todo.id"
          :title="todo.title"
          :isDone="todo.isDone"
          @update="$event => $emit('update', $event)"
          @remove="$event => $emit('remove', $event)"
        />
      </template>
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: "Untitled List"
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.todo-list {
  &__title {
  }
  &__items {
  }
}
</style>

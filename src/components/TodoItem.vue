<template>
  <li class="todo-item" :id="`todo-${id}`" @click="toggleStatus">
    <input type="checkbox" :checked="isDone" />
    <h4 :class="{ 'todo-item--done': isDone }" class="todo-item__title">
      {{ title }}
    </h4>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    isDone: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleStatus() {
      this.$emit("update", {
        id: this.id,
        field: "isDone",
        value: !this.isDone
      });
    }
  }
};
</script>

<style scoped lang="scss">
.todo-item {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  user-select: none;

  &__title {
    display: flex;
    margin: 0;
  }

  &--done {
    text-decoration: line-through;
  }
}
</style>

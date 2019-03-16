import { shallowMount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";
import TodoItem from "@/components/TodoItem.vue";

const title = "new todo";
const todo1 = {
  title,
  isDone: false,
  id: "1"
};
const todo2 = {
  title,
  isDone: false,
  id: "2"
};
const todoList = {
  title: "New List",
  items: [todo1, todo2]
};

describe("TodoList.vue", () => {
  it("renders props.title when passed", () => {
    const wrapper = shallowMount(TodoList, {
      propsData: { ...todoList }
    });
    expect(wrapper.find(".todo-list__title").text()).toMatch(todoList.title);
  });
  it("renders each item", () => {
    const wrapper = shallowMount(TodoList, {
      propsData: { ...todoList }
    });
    const itemsList = wrapper.find(".todo-list__items");

    expect(itemsList.findAll(TodoItem).length).toBe(2);
  });
});

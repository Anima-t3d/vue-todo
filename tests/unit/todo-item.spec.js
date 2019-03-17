import { shallowMount, createLocalVue } from "@vue/test-utils";
import TodoItem from "@/components/TodoItem.vue";
/*import Vuetify from "vuetify";
const localVue = createLocalVue();
localVue.use(Vuetify);*/

let title = "";
let todo = {};
beforeEach(() => {
  title = "new todo";
  todo = {
    title,
    isDone: false,
    id: "1"
  };
});

describe("TodoItem.vue", () => {
  it("renders props.title when passed", () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: { ...todo }
    });
    expect(wrapper.text()).toMatch(title);
  });
  it("renders props.isDone when passed", () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: { ...todo }
    });

    expect(wrapper.vm.isDone).toBe(todo.isDone);
  });
  it("emits update event with field and value", () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: { ...todo }
    });
    const item = wrapper.find(".todo-item");

    item.trigger("click");
    expect(wrapper.emitted().update).toBeTruthy();
    expect(wrapper.emitted().update[0][0]["field"]).toMatch("isDone");
    expect(wrapper.emitted().update[0][0]["value"]).toBe(!todo.isDone);
  });
  it("emits remove event with id", () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: { ...todo }
    });
    const removeBtn = wrapper.find(".todo-item__remove");

    removeBtn.trigger("click");
    expect(wrapper.emitted().remove).toBeTruthy();
    expect(wrapper.emitted().remove[0][0]).toEqual({ id: todo.id });
  });
});

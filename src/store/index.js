import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({});
export const mutations = {
  ADD_TODO(state, { todo }) {
    state.todos.push(todo);
  },
  REMOVE_TODO(state, { id }) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },
  UPDATE_TODO_STATUS(state, { id, isDone }) {
    state.todos = state.todos.map(todo => {
      if (todo.id === id) {
        todo.isDone = isDone;
      }
      return todo;
    });
  }
};
export const actions = {
  async addTodo({ commit }, { todo }) {
    if (!todo) {
      throw "[addTodo] Expected todo";
    }

    commit("ADD_TODO", { todo });
  },
  async removeTodo({ commit }, { id }) {
    if (!id) {
      throw "[removeTodo] Expected id";
    }

    commit("REMOVE_TODO", { id });
  },
  async updateTodoStatus({ commit }, { id, isDone }) {
    if (!id) {
      throw "[updateTodoStatus] Expected id";
    }
    if (typeof isDone !== "boolean") {
      throw "[updateTodoStatus] Expected boolean isDone";
    }

    commit("UPDATE_TODO_STATUS", { id, isDone });
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});

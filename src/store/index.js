import API from "../api";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const state = () => ({
  todos: []
});
export const mutations = {
  SET_TODOS(state, { todos }) {
    state.todos = todos;
  },
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
  async getTodos({ commit }) {
    try {
      const todos = await API.todo.getAll();
      commit("SET_TODOS", { todos });
    } catch (error) {
      console.error(error);
    }
  },
  async addTodo({ commit }, { todo }) {
    if (!todo) {
      throw "[addTodo] Expected todo";
    }

    try {
      await API.todo.add({ todo });
    } catch (error) {
      console.error(error);
    }

    commit("ADD_TODO", { todo });
  },
  async removeTodo({ commit }, { id }) {
    if (!id) {
      throw "[removeTodo] Expected id";
    }

    try {
      await API.todo.remove({ id });
    } catch (error) {
      console.error(error);
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

    try {
      await API.todo.updateStatus({ id, isDone });
    } catch (error) {
      console.error(error);
    }

    commit("UPDATE_TODO_STATUS", { id, isDone });
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});

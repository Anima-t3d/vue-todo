import { NEW_TODO } from "../../config.js";
import { mutations } from "@/store/index.js";

describe("Mutations", () => {
  describe("SET_TODOS", () => {
    it("adds todos to the state", () => {
      const state = {
        todos: []
      };

      mutations.SET_TODOS(state, { todos: [NEW_TODO] });

      expect(state).not.toEqual({
        todos: []
      });
    });
  });
  describe("ADD_TODO", () => {
    it("adds a todo to the state", () => {
      const state = {
        todos: []
      };

      mutations.ADD_TODO(state, { todo: NEW_TODO });

      expect(state).toEqual({
        todos: [NEW_TODO]
      });
    });
  });
  describe("REMOVE_TODO", () => {
    it("removes a todo from the state", () => {
      const state = {
        todos: [{ id: "1" }, NEW_TODO, { id: "2" }]
      };

      mutations.REMOVE_TODO(state, { id: NEW_TODO.id });

      expect(state).toEqual({
        todos: [{ id: "1" }, { id: "2" }]
      });
    });
  });
  describe("UPDATE_TODO_STATUS", () => {
    it("updates a todo status in the state", () => {
      const state = {
        todos: [{ id: "1" }, NEW_TODO, { id: "2" }]
      };
      const originalStatus = NEW_TODO.isDone;
      mutations.UPDATE_TODO_STATUS(state, {
        id: NEW_TODO.id,
        isDone: !originalStatus
      });

      expect(state.todos[1].isDone).toEqual(!originalStatus);
    });
  });
});

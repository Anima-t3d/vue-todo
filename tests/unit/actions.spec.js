import { NEW_TODO } from "../../config.js";
import { actions } from "@/store/index.js";

describe("Actions", () => {
  describe("getTodos", () => {
    it("gets todos", async () => {
      const commit = jest.fn();

      await actions.getTodos({ commit });

      expect(commit).toHaveBeenCalled();
    });
  });
  describe("addTodo", () => {
    it("adds a todo", async () => {
      const commit = jest.fn();

      await actions.addTodo({ commit }, { todo: NEW_TODO });

      expect(commit).toHaveBeenCalledWith("ADD_TODO", { todo: NEW_TODO });
    });
    it("throws an error when no todo is passed", async () => {
      const commit = jest.fn();

      try {
        await actions.addTodo({ commit }, {});
      } catch (error) {
        expect(error).toEqual("[addTodo] Expected todo");
      }
    });
  });
  describe("removeTodo", () => {
    it("removes a todo", async () => {
      const commit = jest.fn();

      await actions.removeTodo({ commit }, { id: "1" });

      expect(commit).toHaveBeenCalledWith("REMOVE_TODO", { id: "1" });
    });
    it("throws an error when no id is passed", async () => {
      const commit = jest.fn();

      try {
        await actions.removeTodo({ commit }, {});
      } catch (error) {
        expect(error).toEqual("[removeTodo] Expected id");
      }
    });
  });
  describe("updateTodoStatus", () => {
    it("updates a todo status", async () => {
      const commit = jest.fn();

      await actions.updateTodoStatus({ commit }, { id: "1", isDone: true });

      expect(commit).toHaveBeenCalledWith("UPDATE_TODO_STATUS", {
        id: "1",
        isDone: true
      });
    });
    it("throws an error when no id is passed", async () => {
      const commit = jest.fn();

      try {
        await actions.updateTodoStatus({ commit }, { isDone: true });
      } catch (error) {
        expect(error).toEqual("[updateTodoStatus] Expected id");
      }
    });
    it("throws an error when no isDone is passed", async () => {
      const commit = jest.fn();

      try {
        await actions.updateTodoStatus({ commit }, { id: "1" });
      } catch (error) {
        expect(error).toEqual("[updateTodoStatus] Expected boolean isDone");
      }
    });
  });
});

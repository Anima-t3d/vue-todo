import uuid from "uuid/v4";

export const NEW_TODO = {
  id: uuid(),
  title: "",
  isDone: false
};

export const createTodo = () => {
  return { ...NEW_TODO, id: uuid() };
};

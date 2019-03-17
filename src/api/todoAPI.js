const readStorage = () => {
  let todos = window.localStorage.getItem("todos");
  if (!todos) {
    const sampleData = [
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
    ];
    todos = JSON.stringify(sampleData);
  }
  return JSON.parse(todos);
};
const writeStorage = data => {
  const todos = JSON.stringify(data);
  window.localStorage.setItem("todos", todos);
};

const todoAPI = {
  async getAll() {
    return new Promise((resolve, reject) => {
      try {
        resolve(readStorage());
      } catch (error) {
        reject(error);
      }
    });
  },
  async add({ todo }) {
    return new Promise((resolve, reject) => {
      try {
        const todos = readStorage();
        todos.push(todo);

        resolve(writeStorage(todos));
      } catch (error) {
        reject(error);
      }
    });
  },
  async remove({ id }) {
    return new Promise((resolve, reject) => {
      try {
        const todos = readStorage();
        const data = todos.filter(todo => todo.id !== id);

        resolve(writeStorage(data));
      } catch (error) {
        reject(error);
      }
    });
  },
  async updateStatus({ id, isDone }) {
    return new Promise((resolve, reject) => {
      try {
        const todos = readStorage();
        const data = todos.map(todo => {
          if (todo.id === id) {
            todo.isDone = isDone;
          }
          return todo;
        });

        resolve(writeStorage(data));
      } catch (error) {
        reject(error);
      }
    });
  }
};

export default todoAPI;

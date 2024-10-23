import { useState } from "react";

function TodoList() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTask, setEditTask] = useState({});

  const addTodo = () => {
    if (todoText) {
      const todoObj = {
        id: (todos[todos.length - 1]?.id || 0) + 1,
        task: todoText,
        isCompleted: false,
      };
      let arr = [...todos];
      arr.push(todoObj);
      setTodos(arr);
      setTodoText("");
    }
  };

  const taskComplete = (id) => {
    const arr = [...todos];
    let idx = arr.findIndex((ele) => ele.id === id);
    if (idx > -1) {
      let obj = { ...arr[idx] };
      obj.isCompleted = true;
      arr[idx] = obj;
      setTodos(arr);
    }
  };

  const deleteTask = (id) => {
    const arr = [...todos];
    let idx = arr.findIndex((ele) => ele.id === id);
    if (idx > -1) {
      arr.splice(idx, 1);
      setTodos(arr);
    }
  };

  const saveEditTask = (idx) => {
    if (editTask.task) {
      let arr = [...todos];
      arr[idx] = editTask;
      setTodos(arr);
      setEditTask({});
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Todo List</h1>

        <div className="mb-4">
          <input
            value={todoText}
            type="text"
            id="todo-input"
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Add a new task"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            id="add-btn"
            onClick={addTodo}
            className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Todo
          </button>
        </div>

        <ul id="todo-list" className="space-y-3">
          {todos?.map((todo, idx) => (
            <li key={idx} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
              {editTask.id !== todo.id ? (
                <span className={`text-gray-700 ${todo?.isCompleted ? "line-through" : ""}`}>{todo.task}</span>
              ) : (
                <input value={editTask.task} onChange={(e) => setEditTask({ ...editTask, task: e.target.value })} />
              )}
              <div className="flex gap-4">
                {!todo?.isCompleted && editTask.id !== todo.id ? (
                  <>
                    <button onClick={() => setEditTask(todo)} className="text-blue-500 hover:text-blue-600 font-semibold">
                      Edit
                    </button>
                    <button onClick={() => taskComplete(todo.id)} className="text-green-500 hover:text-green-600 font-semibold">
                      Completed
                    </button>
                  </>
                ) : !todo?.isCompleted ? (
                  <>
                    <button onClick={() => saveEditTask(idx)} className="text-blue-500 hover:text-blue-600 font-semibold">
                      Save
                    </button>
                    <button onClick={() => setEditTask({})} className="text-red-500 hover:text-red-600 font-semibold">
                      Cancel
                    </button>
                  </>
                ) : null}
                <button onClick={() => deleteTask(todo.id)} className="text-red-500 hover:text-red-600 font-semibold">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;

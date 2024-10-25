/* eslint-disable react/prop-types */

function ListItem(props) {
  //   console.log("@", props.todo.task);
  const { editTask, todo, setEditTask, taskComplete, saveEditTask, deleteTask, idx } = props;
  return (
    <li className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
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
  );
}

export default ListItem;

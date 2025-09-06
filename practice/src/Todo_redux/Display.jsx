import  { useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo, toggletodo } from "./Slice";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "all";
    case "SHOW_COMPLETED":
      return "completed";
    case "SHOW_PENDING":
      return "pending";
    default:
      return state;
  }
};

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [filter, filterDispatch] = useReducer(filterReducer, "all");

  const todos = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() !== "") {
      dispatch(addtodo(task));
      setTask("");
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">Todo List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Task
      </button>

      <div className="flex gap-2 mt-4">
        <button onClick={() => filterDispatch({ type: "SHOW_ALL" })}>All</button>
        <button onClick={() => filterDispatch({ type: "SHOW_COMPLETED" })}>Completed</button>
        <button onClick={() => filterDispatch({ type: "SHOW_PENDING" })}>Pending</button>
      </div>

      <ul className="mt-4">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggletodo(todo.id))}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useState } from "react";
import "./TodoList.css";

export const TodoList = () => {
  const [listInput, setListInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTododList = () => {
    if (listInput.trim() === "") return;
    setTodoList([...todoList, listInput]);
    setListInput("");
  };

  const handleDelete = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setListInput(todoList[index]);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    if (editIndex === null) return;
    const updatedList = [...todoList];
    updatedList[editIndex] = listInput;
    setTodoList(updatedList);
    setEditIndex(null);
    setListInput("");
  };

  return (
    <div className="todo-list-container">
      <div className="heading-todo">
        <h1>Machine Coding Question</h1>
        <h2>Todo List</h2>
      </div>

      <div className="todo-list-input">
        <input
          type="text"
          value={listInput}
          onChange={(e) => setListInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={editIndex !== null ? handleUpdate : handleAddTododList}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <div className="todo-list-item">
        <ul className="todo-list-ul">
          {todoList.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <div className="todo-actions">
                <span onClick={() => handleEdit(index)} title="Edit">✏️</span>
                {editIndex === index && (
                  <span onClick={handleUpdate} title="Update">✅</span>
                )}
                <span onClick={() => handleDelete(index)} title="Delete">🗑️</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

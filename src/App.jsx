import { useState } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([
  
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>TO DO LIST</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Add a task......................."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>ADD</button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <span>{task}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}  
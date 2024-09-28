import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [currentTab, setCurrentTab] = useState("notCompleted"); // new state for tab

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const filteredTasks =
    currentTab === "completed"
      ? tasks.filter((task) => task.completed) // show only completed tasks
      : tasks.filter((task) => !task.completed); // show only not completed tasks

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="tabs">
        <button
          onClick={() => setCurrentTab("notCompleted")}
          className={currentTab === "notCompleted" ? "active-tab" : ""}
        >
          Not Completed
        </button>
        <button
          onClick={() => setCurrentTab("completed")}
          className={currentTab === "completed" ? "active-tab" : ""}
        >
          Completed
        </button>
      </div>

      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

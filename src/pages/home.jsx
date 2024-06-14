import React, { useState, useEffect } from 'react';
import TaskList from '../components/taskList';
import AddTask from '../components/addTask';

const Home = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
  };

  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks"
        className="search-bar"
      />
      <AddTask addTask={addTask} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
};

export default Home;

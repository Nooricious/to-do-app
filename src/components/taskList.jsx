import React from 'react';
import Task from './task';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task key={index} task={task} deleteTask={deleteTask} index={index} />
      ))}
    </div>
  );
};

export default TaskList;

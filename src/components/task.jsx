import React from 'react';

const Task = ({ task, deleteTask, index }) => {
  return (
    <div className="task">
      {task}
      <button onClick={() => deleteTask(index)} className="delete-button">
        Delete
      </button>
    </div>
  );
};

export default Task;

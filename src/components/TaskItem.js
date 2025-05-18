
import React from 'react';

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task-item" style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
      <h4>{task.title}</h4>
      {task.description && <p>{task.description}</p>}
      <p>Priority: {task.priority}</p>
      <p>Status: {task.status}</p>
       <div className="button-group">
       <button onClick={() => onEdit(task)} style={{ marginRight: '10px' }}>Edit</button>
       <button onClick={() => onDelete(task.id)} style={{ color: 'red' }}>Delete</button>
       </div>
      
    </div>
  );
};

export default TaskItem;






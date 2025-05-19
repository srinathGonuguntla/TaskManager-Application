import React, { useState } from 'react';

const TaskItem = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTask({ ...editTask, [name]: value });
  };

  const handleSave = () => {
    onEdit(editTask); 
    setIsEditing(false); 
  };

  return (
    <div style={{ border: '1px solid #ccc',border : '5px', marginBottom: '10px' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editTask.title}
            onChange={handleChange}
          />
          <br />
          <textarea
            name="description"
            value={editTask.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <br />
          <select name="priority" value={editTask.priority} onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <select name="status" value={editTask.status} onChange={handleChange}>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <br />
          <button onClick={handleSave}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;







/* 
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





 */
// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ onAddTask, editingTask, onUpdateTask, cancelEdit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Low',
    status: 'Pending'
  });

  useEffect(() => {
    if (editingTask) {
      setFormData(editingTask);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      onUpdateTask(formData);
    } else {
      onAddTask(formData);
    }
    setFormData({ title: '', description: '', priority: 'Low', status: 'Pending' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="description"
        placeholder="Description (optional)"
        value={formData.description}
        onChange={handleChange}
      />
      <br />
      <label>Priority:</label>
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <br />
      <label>Status:</label>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <br />
      <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
      {editingTask && <button onClick={cancelEdit}>Cancel</button>}
    </form>
  );
};

export default TaskForm;

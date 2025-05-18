import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import ProgressTracker from '../components/ProgressTracker'; 

const CreateTaskPage = () => {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  return (
    <div>
      <h2>Create a New Task</h2>
      <TaskForm onAddTask={addTask} />
      <ProgressTracker tasks={tasks} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onEditTask={updateTask}
      />
    </div>
  );
};

export default CreateTaskPage;






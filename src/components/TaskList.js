import React, { useState } from 'react';
import TaskItem from './TaskItem';
import Pagination from './Pagination';

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  const tasksPerPage = 5;

  const [priorityFilter, setPriorityFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);


  const filteredTasks = tasks.filter((task) => {
    const matchesPriority = priorityFilter ? task.priority === priorityFilter : true;
    const matchesStatus = statusFilter ? task.status === statusFilter : true;
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesPriority && matchesStatus && matchesSearch;
  });


  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);


  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };


  const handlePriorityChange = (e) => {
    setPriorityFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search tasks by title..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
      />


      <div style={{ marginBottom: '10px' }}>
        <label>
          Priority:
          <select value={priorityFilter} onChange={handlePriorityChange}>
            <option value="">All</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>

        <label style={{ marginLeft: '20px' }}>
          Status:
          <select value={statusFilter} onChange={handleStatusChange}>
            <option value="">All</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </label>
      </div>


      {currentTasks.length > 0 ? (
        currentTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onEdit={onEditTask}
          />
        ))
      ) : (
        <p>No tasks match your criteria.</p>
      )}


      {filteredTasks.length > tasksPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      )}
    </div>
  );
};

export default TaskList;







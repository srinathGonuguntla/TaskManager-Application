import React from 'react';

const ProgressTracker = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.status === 'Completed').length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="progress-tracker" style={{ marginBottom: '20px' }}>
      <h3>Progress Tracker</h3>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed: {completedTasks} / {totalTasks} ({completionRate}%)</p>
      <progress value={completionRate} max="100" style={{ width: '100%' }} />
    </div>
  );
};

export default ProgressTracker;

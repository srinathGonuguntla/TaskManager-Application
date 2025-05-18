import './index.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateTaskPage from './pages/CreateTaskPage';


function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Task Manager</h1>
        <nav>
          <Link to="/create" >Create Task</Link>
        </nav>
        <Routes>
        <Route path='/create' element={<CreateTaskPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;

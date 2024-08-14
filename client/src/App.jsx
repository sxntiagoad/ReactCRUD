import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TasksPage } from './pages/TasksPage';
import { TasksFormPage } from './pages/TasksFormPage';
import './index.css'; // Asegúrate de que index.css se está importando
import { Navigation } from "./components/Navigation";
function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          {/* redirect to tasks */}
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import EventDashboard from './pages/EventDashboard';
import CreateEvent from './pages/CreateEvent';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<EventDashboard />} />
                <Route path="/create-event" element={<CreateEvent />} />
            </Routes>
        </Router>
    );
}

export default App;
    
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Landing from './pages/landing';
import Navbar from './components/navbar';
import Projects from './pages/projects';
import Blogs from './pages/blogs';
import BlogDetail from './components/BlogDetail';
import SubmitForm from './pages/admin';
import Delete from './pages/delete';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/admin" element={<SubmitForm />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </Router>
  );
}

export default App;

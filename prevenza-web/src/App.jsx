import React from 'react';
import 'tailwindcss/tailwind.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Welcome from "./components/Welcome.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <div className="flex-grow flex flex-col">
          <Routes>
            <Route index element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );

}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/static/navBar/Navbar';
import Footer from './components/static/footer/Footer'
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Routes>

          <Route path="/home" element={<Home />} />

        </Routes>

        <Footer />

      </Router>
    </>
  );
}

export default App;

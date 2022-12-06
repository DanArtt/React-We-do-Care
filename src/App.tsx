import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar, { NavBar2 } from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer'
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <Router>

        <NavBar />
        <NavBar2 />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />

        </Routes>

        <Footer />

      </Router>
    </>
  );
}

export default App;

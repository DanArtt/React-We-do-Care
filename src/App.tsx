import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar, { NavBar2 } from './components/static/navBar/Navbar';
import Footer from './components/static/footer/Footer'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';

function App() {
  return (
    <>
      <Router>

        <NavBar />
        <NavBar2 />

        <Routes>

          <Route path="/" element={<Home />} />
          
          <Route path="logar" element={<Login />} />
          
          <Route path="cadastrar" element={<Cadastro />} />

        </Routes>

        <Footer />

      </Router>
    </>
  );
}

export default App;

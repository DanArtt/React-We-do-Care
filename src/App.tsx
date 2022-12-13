import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar, { NavBar2 } from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer'
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import CadastroCategoria from './components/categorias/criarCategoria/CriarCategoria';
import { Provider } from 'react-redux';
import store from './store/store';
import CriarProduto from './components/produtos/criarProduto/CriarProduto';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>

        <NavBar />
        <NavBar2 />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/categorias' element={<ListaCategoria />} />
          <Route path='/produtos' element={<ListaProduto />} />
          <Route path='/categoriasform' element={<CadastroCategoria />} />
          <Route path='/categoriasform/:id' element={<CadastroCategoria />} />
          <Route path='/produtosform' element={<CriarProduto />} />
          <Route path='/produtosform/:id' element={<CriarProduto />} />

        </Routes>

        <Footer />

      </Router>
      </Provider>
    </>
  );
}

export default App;

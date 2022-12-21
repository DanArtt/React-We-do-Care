import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer'
import Home from './pages/home/Home';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import ListaProduto from './components/produtos/listaProduto/ListaProduto';
import { Provider } from 'react-redux';
import store from './store/store';
import CriarProduto from './components/produtos/criarProduto/CriarProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import CriarCategoria from './components/categorias/criarCategoria/CriarCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import ExibirProduto from './components/produtos/exibirProduto/ExibirProduto';



function App() {
  return (
    <>
      <Provider store={store}>
        <Router>

          <NavBar />

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastro' element={<Cadastro />} />

            <Route path='/categorias' element={<ListaCategoria />} />
            <Route path='/categoriasform' element={<CriarCategoria />} />
            <Route path='/categoriasform/:id' element={<CriarCategoria />} />
            <Route path='/deletarCategoria/:id' element={<DeletarCategoria />} />

            <Route path='/produtos' element={<ListaProduto />} />
            <Route path='/produtosform' element={<CriarProduto />} />
            <Route path='/produtosform/:id' element={<CriarProduto />} />
            <Route path='/deletarProduto/:id' element={<DeletarProduto />} />
            <Route path='/produtos/:id' element={<ExibirProduto />} />

          </Routes>

          <Footer />

        </Router>
      </Provider>
    </>
  );
}

export default App;

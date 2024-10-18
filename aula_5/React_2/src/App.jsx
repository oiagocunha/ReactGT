import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Saudacao from './components/Saudacao/Saudacao'
import ListaTenis from './components/ListaTenis/index'
import BotaoDinamico from '../src/components/BotaoDinamico/BotaoDinamico'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Produtos from './pages/Produtos'

function App() {

  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/home' element={<HomePage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/produtos' element={<Produtos/>} />
            <Route path='*' element={<HomePage/>} />
            {/* Garante que outras rotas não rastreadas retornem para Home */}
          </Routes>
        </div>
      </Router>

    </>
  )
}

export default App

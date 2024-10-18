import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Saudacao from './components/Saudacao/Saudacao'
// import ListaTenis from './components/ListaTenis/index'
import BotaoDinamico from '../src/components/BotaoDinamico/BotaoDinamico'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'

function App() {
  // const [count, setCount] = useState(0)

  // const saldo = 10
  // const saldo2 = 100
  // const saldo3 = 1000

  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/home' element={<HomePage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<HomePage/>} />
            {/* Garante que outras rotas não rastreadas retornem para Home */}
          </Routes>
        </div>
      </Router>




    {/* <Header />
    <ListaTenis />
    <BotaoDinamico />
    <Saudacao nome="Fulano" saldo={saldo}/>
    <Saudacao nome="Beltrano" saldo={saldo2}/>
    <Saudacao nome="Ciclano" saldo={saldo3}/>
    <BotaoDinamico fundo='white' cor='red'>Deletar</BotaoDinamico>
    <BotaoDinamico fundo='white' cor='green'>Enviar</BotaoDinamico>
    <BotaoDinamico fundo='black' cor='yellow'>Alterar</BotaoDinamico>
    <BotaoDinamico fundo='white' cor='blue'>Não sei</BotaoDinamico> */}
    </>
  )
}

export default App

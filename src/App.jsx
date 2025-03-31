import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Url from './pages/Url'
import UrlCreate from './pages/UrlCreate'
import { Container } from 'react-bootstrap'

function App() {

  return (
      <Container fluid className="p-0">
      <Header/>
        <Routes>
          <Route path="/" element = {<Login/>}/>
          <Route path="/url" element = {<Url/>}/>
          <Route path="/createUrl" element = {<UrlCreate/>}/>
        </Routes>
      </Container>
  )
}

export default App

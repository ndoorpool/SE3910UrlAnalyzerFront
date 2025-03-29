import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Book from './pages/Book'
import Url from './pages/Url'
import UrlCreate from './pages/UrlCreate'

function App() {

  return (
    <>
      <div>
      <Header/>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/book" element = {<Book/>}/>
          <Route path="/url" element = {<Url/>}/>
          <Route path="/createUrl" element = {<UrlCreate/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App

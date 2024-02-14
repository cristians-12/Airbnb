import React from "react"
import './App.css'
import Index from "./components/index"
import Login from "./components/login"
import Navbar from "./components/navbar"
import Sesion from "./components/sesion"
import Inicio from "./components/inicio"
import { Route, Router } from "react-router-dom"


const App = () => {

  return (
    <>
    <Router>
      <Route path="/login" element={<Login/>}/>
    </Router>
      
    </>
  )
}

export default App

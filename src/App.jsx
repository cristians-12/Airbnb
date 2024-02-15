import React from "react";
import "./App.css";
import Index from "./components/index";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Sesion from "./components/sesion";
import Inicio from "./components/inicio";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

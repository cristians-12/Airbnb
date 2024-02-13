import React from "react"
import habitaciones from "../img/habitaciones.png"
import piscina from "../img/piscina.png"
import casa_de_arbol from "../img/casa-del-arbol.png"
import campo from "../img/campo.png"
import casas_naturales from "../img/casas_naturales.png"
import dammusos from "../img/dammusos.jpg"
import artico from "../img/artico.jpg"
import camping from "../img/camping.jpg"
import diseño from "../img/diseño.jpg"
import minicasa from "../img/minicasa.jpg"
import playas from "../img/playas.jpg"
import cabañas from "../img/cabañas.jpg"

const Menu = () => {
    return (
      <div className="flex pt-8">
          <div className="ml-11 cursor-pointer">
            <img src={habitaciones} className="w-6 h-6"/>
            <h1 className="text-xs font-semibold hover:underline">Habitaciones</h1>
          </div>
          <div className="ml-11 cursor-pointer">
            <img src={piscina} className="w-6 h-6"/>
            <h1 className="text-xs font-semibold hover:underline">Piscinas increibles</h1>
          </div>
          <div className="ml-11 cursor-pointer">
            <img src={casa_de_arbol} className="w-6 h-6"/>
            <h1 className="text-xs font-semibold hover:underline">Casas del árbol</h1>
          </div>
          <div className="ml-11 cursor-pointer">
            <img src={campo} className="w-6 h-6"/>
            <h1 className="text-xs font-semibold hover:underline">En el campo</h1>
          </div>
          <div className="ml-11 cursor-pointer">
            <img src={casas_naturales} className="w-6 h-6"/>
            <h1 className="text-xs font-semibold hover:underline">Casas naturales</h1>
          </div>
          <div className="ml-11 cursor-pointer">
            <img src={dammusos} className="w-6 h-6"/>
            <h1 className="text-xs font-semibold hover:underline">Dammusos</h1>
          </div>
          <div className="ml-11 cursor-pointer">
            <img src={artico} className="w-6 h-6"/>
            <h1 className="text-xs font-semibold hover:underline">En el ártico</h1>
          </div>
          <div className="ml-11 cursor-pointer">
            <img src={camping} className="w-6 h-6"/>
            <h1 className="text-xs font-semibold hover:underline">Camping</h1>
          </div>
          <div className="ml-11 cursor-pointer">
            <img src={diseño} className="w-6 h-6"/>
            <h1 className="text-xs font-semibold hover:underline">Diseño</h1>
          </div>
          <div className="ml-11 cursor-pointer">
            <img src={minicasa} className="w-6 h-6"/>
            <h1 className="text-xs font-semibold hover:underline">Minicasas</h1>
          </div>
          <div className="ml-11 cursor-pointer">
            <img src={playas} className="w-6 h-6"/>
            <h1 className="text-xs font-semibold hover:underline">Playas</h1>
          </div>
          <div className="ml-11 cursor-pointer">
            <img src={cabañas} className="w-6 h-6"/>
            <h1 className="text-xs font-semibold hover:underline">cabañas triangulares</h1>
          </div>
      </div>
    )
  }
  
  export default Menu
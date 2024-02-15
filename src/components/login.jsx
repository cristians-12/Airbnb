import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import facebook from "../img/facebook.png"
import google from "../img/google.png"
import apple from "../img/apple.png"
import email from "../img/email.png"
import movil from "../img/movil.png"

const Login = ({setRegistro}) => {

    const [email,setEmail] = useState(false)
    const cerrarPop = ()=>{
      setRegistro((var1)=>!var1)
    }

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-tittle"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="p-2 pb-8 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="p-4 mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex">
              <h1 onClick={cerrarPop} >X</h1>
              <h3
                className="ml-36 text-base font-bold leading-6 text-gray-900"
                id="modal-tittle"
              >
                Inicia sesión o regístrate
              </h3>
            </div>
            <hr className="mt-4"/>
            <h1 className="mt-4 font-semibold text-2xl">¡Te damos la bienvenida a Airbnb!</h1>
            {email ? <input type="text" className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg block w-11/12 h-12 mt-4 p-2.5 outline-none border-black"placeholder="Email" required/> 
             : <PhoneInput placeholder="Numero telefónico" inputStyle={{with:"453px",height:"50px",fontSize:"17px"}} containerStyle={{marginTop:"15px", marginLeft:"20px"}}/>}
             {email && <input type="text" className="ml-5 border border-spacing-1 text-gray-900 text-lg rounded-lg block w-11/12 h-12 mt-4 p-2.5 outline-none border-black"placeholder="Password" required/>}
            <h1 className="text-xs ml-5">Te llamaremos o enviaremos un SMS para confirmar tu número. Se aplican las tarifas estándar de mensajes y datos. Política de Privacidad</h1>
            <button type="button" className="ml-5 text-white bg-rose-600 focus:ring-4 font-medium mt-3 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-11/12 h-12">
            {email ? "Agregar y continuar" : "Continuar"}
            </button>
            <h1 className="text-center mt-3">o</h1>
            <div className="cursor-pointer hover:bg-gray-200  ml-5 w-11/12 p-3 mt-3 flex items-center border border-spacing-1 rounded-xl border-black">
                <img src={facebook} className="h-6 w-6 ml-3"/>
                <h1 className="ml-24">Continúa con Facebook</h1>
            </div>
            <div className="cursor-pointer hover:bg-gray-200  ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl border-black">
                <img src={google} className="h-6 w-6 ml-3"/>
                <h1 className="ml-24">Continúa con google</h1>
            </div>
            <div className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl border-black">
                <img src={apple} className="h-6 w-6 ml-3"/>
                <h1 className="ml-24">Continúa con apple</h1>
            </div>
            {!email ? <div onClick={()=> setEmail(true)} className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl border-black">
                <img src={email} className="h-6 w-6 ml-3"/>
                <h1 className="ml-24">Continúa con gmail</h1>
            </div>
            :  <div onClick={()=> setEmail(false)} className="cursor-pointer hover:bg-gray-200 ml-5 w-11/12 p-3 mt-4 flex items-center border border-spacing-1 rounded-xl border-black">
            <img src={movil} className="h-6 w-6 ml-3"/>
            <h1 className="ml-24">Continúa con el número telefónico</h1>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
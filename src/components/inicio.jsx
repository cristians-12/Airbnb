import React from "react"
import casa1 from "../img/casa1.jpg"

const Inicio = () => {
    return (
      
<div className="max-w-sm bg-white border border-gray-200 w-72 h-98 rounded-t-xl ml-11 mt-7">
    <a href="#">
        <img className="w-72 h-72 rounded-xl rounded-t-lg" src={casa1} alt="" />
    </a>
    <div className="py-1">
            <div className="mb-1 text-lg font-semibold">Martingana, Italia</div>
        <p className=" text-sm text-gray-700 dark:text-gray-400">Anfitrión particular</p>
        <h2 className="text-gray-500 mb-1">21-28 feb</h2>
        <h1 className="font-semibold">107$ noche</h1>
    </div>
</div>

    )
  }
  
  export default Inicio
import React from "react";

import { FaBed, FaBath, FaCar } from "react-icons/fa";


function CardPropiedad({ e_pro }) {
  return (
    <div className="w-95 shadow-xl rounded-b-xl m-3 ">
      <div
        className="h-68 bg-cover rounded-t-xl"
        style={{
          backgroundImage: `url(http://localhost:1337${e_pro.imagen[0].url})`,
        }}
      ></div>
      {/* CONTENEDOR TEXT */}
      <div className=" p-4 ">
        <div className="mb-8">
          <div className="text-black font-bold text-xl mb-2">
            {e_pro.nombre}
          </div>
          <p className="text-grey-darker text-base">{e_pro.habitaciones}</p>
          <p className="text-grey-darker text-base">{e_pro.estacionamiento}</p>
        </div>
        <div className="flex justify-between text-xs">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={"http://localhost:1337" + e_pro.imagen[0].url}
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm text-gray-500">
              <p className="leading-none">Jonathan Reinink</p>
              <p>precio: {e_pro.sshh} </p>
            </div>
          </div>

          <div className="px-1 ">
            <button className="btn bg-blue-400 hover:bg-red-700">
              Ver mas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPropiedad;

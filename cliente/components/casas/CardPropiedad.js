import { FaBed, FaBath, FaCar } from "react-icons/fa";

function CardPropiedad({ e_pro }) {
  return (
    <div className="shadow-xl rounded-b-xl m-3" style={{ width: "24.1rem" }}>
      <div
        className="bg-cover bg-center w-full rounded-t-xl"
        style={{
          backgroundImage: `url(http://localhost:1337${e_pro.imagen[0].url})`,
          height: "10.5rem",
        }}
      ></div>
      {/* CONTENEDOR TEXT */}
      <div className=" p-4 ">
        <div className="mb-8">
          <div className="text-black font-bold text-xl mb-2 uppercase ">
            {e_pro.nombre}
          </div>
          <div className="flex items-center hover:text-blue-500 ">
            <FaBed className="mx-2" />
            <p className="text-grey-darker text-base">
              : {e_pro.habitaciones} Habitaciones
            </p>
          </div>
          <div className="flex items-center hover:text-blue-500 ">
            <FaCar className="mx-2" />
            <p className="text-grey-darker text-base">
              : {e_pro.estacionamiento} Estacionamiento
            </p>
          </div>
          <div className="flex items-center hover:text-blue-500 ">
            <FaBath className="mx-2" />
            <p className="text-grey-darker text-base">: {e_pro.sshh} sshh</p>
          </div>
        </div>
        <div className="flex justify-between text-xs">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={"http://localhost:1337" + e_pro.imagen[0].url}
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm text-gray-500">
              <p className="leading-none">Propietario</p>
              <p>precio: $ {e_pro.precio} </p>
              <p className="peru">precio: $ {e_pro.precio} </p>
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

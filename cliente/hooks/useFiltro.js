import React, { useEffect, useState } from "react";
import clienteAxios from "../config/clienteAxios";
import {FaChevronDown} from 'react-icons/fa'

function useFiltro() {
  const [dataCategorias, setDataCategorias] = useState([]);
  const [categoria, setCategoria] = useState("");

  console.log(categoria);

  const obteneCategorias = async () => {
    const rex = await clienteAxios.get("categorias");
    setDataCategorias(rex.data);
    console.log(rex.data);
  };

  useEffect(() => {
    obteneCategorias();
  }, []);

  const FiltroUI = () => (
    <div>
      <form className="flex  items-center my-2">
        <label className="mr-4 text-sm md:text-lg ">Selecciona una Categoria</label>
        <div className="flex-shrink inline-block relative">
          <select
            className="select_form focus:text-blue-600 "
            as="select"
            onChange={(e) => setCategoria(e.target.value)}
            value={categoria}
          >
            <option value=""> Todas las Categorias </option>
            {dataCategorias.map((e_cat) => (
              <option className=''  key={e_cat._id} value={e_cat.nombre}>
                {" "}
                {e_cat.nombre}{" "}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute top-0 right-0  px-3 py-3 text-gray-600 ">
            <FaChevronDown className='' />
          </div>
        </div>
      </form>
    </div>
  );

  return {
    FiltroUI,
    categoria,
  };
}

export default useFiltro;

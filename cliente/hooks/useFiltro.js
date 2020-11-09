import React, { useEffect }  from "react";
import clienteAxios from "../config/clienteAxios";


function useFiltro() {

    const obteneCategorias = async () => {
        const rex = await clienteAxios.get('categorias')
        console.log(rex.data);
    }

    useEffect(() => {
    obteneCategorias()
    }, [])

  const FiltroUI = () => (
    <div>
      <h4>filtro</h4>
    </div>
  );

  return {
    FiltroUI,
  };
}

export default useFiltro;

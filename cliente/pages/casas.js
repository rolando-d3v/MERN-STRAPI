import React, { useState, useEffect } from "react";
import clienteAxios from "../config/clienteAxios";
import usePropiedades from "../hooks/usePropiedades";
import useFiltro from "../hooks/useFiltro";

export default function Casas() {
  const [dataPropiedades, setDataPropiedades] = useState([]);
  const [filtradas, setFiltradas] = useState([]);

  const { Propiedades } = usePropiedades(filtradas);
  const { FiltroUI, categoria } = useFiltro();


  const obtenerPropiedades = async () => {
    const rex = await clienteAxios.get("/propiedades");
    setDataPropiedades(rex.data);
    setFiltradas(rex.data)
  };


  useEffect(() => {
    if (categoria) {
      const filtrax = dataPropiedades.filter((pro)=> pro.categoria.nombre == categoria)
      setFiltradas(filtrax)
      console.log(filtrax);
    } else {
      obtenerPropiedades();
    }
  }, [categoria]);


  return (
    <div className='container-x' >
      <main>
        <div >
        <h3 className="text-muted">Nuestras Casas y Departamentos</h3>
        <FiltroUI />
        </div>
        <Propiedades />
        <h4>hola</h4>
        <h1>hola</h1>
      </main>
    </div>
  );
}

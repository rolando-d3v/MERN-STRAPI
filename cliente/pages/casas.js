import React, { useState, useEffect } from "react";
import clienteAxios from "../config/clienteAxios";
import usePropiedades from "../hooks/usePropiedades";
import useFiltro from "../hooks/useFiltro";
import Container from "../components/layout/Container";

export default function Casas() {
  const [dataPropiedades, setDataPropiedades] = useState([]);
  const [filtradas, setFiltradas] = useState([]);

  const { Propiedades } = usePropiedades(filtradas);
  const { FiltroUI, categoria } = useFiltro();

  const obtenerPropiedades = async () => {
    const rex = await clienteAxios.get("/propiedades");
    setDataPropiedades(rex.data);
    setFiltradas(rex.data);
  };

  useEffect(() => {
    if (categoria) {
      const filtrax = dataPropiedades.filter(
        (pro) => pro.categoria.nombre == categoria
      );
      setFiltradas(filtrax);
    } else {
      obtenerPropiedades();
    }
  }, [categoria]);

  return (
    <Container>
      <div className="container-x">
        <div className="mt-4">
          <div>
            <h3 className="text-blue-500 text-2xl md:text-3xl hover:text-azul-900  font-bold ">
              Nuestras Casas y Departamentos
            </h3>
            <FiltroUI />
          </div>
          <div className="flex">
            <Propiedades />
          </div>
        </div>
      </div>
    </Container>
  );
}

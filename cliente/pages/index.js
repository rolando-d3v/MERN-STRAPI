import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import clienteAxios from "../config/clienteAxios";
import usePropiedades from "../hooks/usePropiedades";
import useFiltro from "../hooks/useFiltro";

export default function Home() {
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
    <div className={styles.container}>
      <Head>
        <title>Bienes House</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div >
        <h3 className="text-muted">Nuestras Casas y Departamentos</h3>
        <FiltroUI />
        </div>
        <Propiedades />
      </main>
    </div>
  );
}

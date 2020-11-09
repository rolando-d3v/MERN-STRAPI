import React, { useState, useEffect } from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import clienteAxios from '../config/clienteAxios'
import usePropiedades from '../hooks/usePropiedades'
import useFiltro from '../hooks/useFiltro'


export default function Home() {

  const [dataPropiedades, setDataPropiedades] = useState([])


  const obtenerPropiedades = async () => {
    const rex = await clienteAxios.get('/propiedades')
    setDataPropiedades(rex.data)
  }

  useEffect(() => {
    obtenerPropiedades()
  }, [])


  const {Propiedades} = usePropiedades(dataPropiedades)
  const {FiltroUI} = useFiltro()


  return (
    <div className={styles.container}>
      <Head>
        <title>Bienes House</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>




      <main>
        <h3 className='text-muted' >Nuestras Casas y Departamentos</h3>
        <FiltroUI/>
        <Propiedades/>
      </main>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import clienteAxios from "../config/clienteAxios";
import { Form } from "react-bootstrap";

function useFiltro() {
  const [dataCategorias, setDataCategorias] = useState([]);
  const [categoria, setCategoria] = useState('');

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
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Selecciona una Categoria</Form.Label>
        <Form.Control as="select" onChange={(e)=> setCategoria(e.target.value) } value={categoria} >
          <option value=''> Todas las Categorias </option>
          {dataCategorias.map((e_cat) => (
            <option key={e_cat._id} value={e_cat.nombre} > {e_cat.nombre} </option>
          ))}
        </Form.Control>
      </Form.Group>
    </div>
  );

  return {
    FiltroUI,
    categoria
  };
}

export default useFiltro;

import React, { useEffect, useState } from "react";
import clienteAxios from "../config/clienteAxios";
import { Form } from "react-bootstrap";

function useFiltro() {
  const [dataCategorias, setDataCategorias] = useState([]);

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
      <h4>filtro</h4>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Selecciona una Categoria</Form.Label>
        <Form.Control as="select">
          {dataCategorias.map((e_cat) => (
            <option key={e_cat._id}> {e_cat.nombre} </option>
          ))}
        </Form.Control>
      </Form.Group>
    </div>
  );

  return {
    FiltroUI,
  };
}

export default useFiltro;

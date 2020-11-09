import React from "react";
import Link from "next/link";
import { FaBed, FaBath, FaCar } from "react-icons/fa";
import { Card } from "react-bootstrap";

function CardPropiedad({ e_pro }) {
  return (
    <Card style={{ width: "20rem", margin: "1em" }}>
      <Card.Img
        variant="top"
        src={"http://localhost:1337" + e_pro.imagen[0].url}
      />
      <Card.Body>
        <Card.Title className="text-capitalize">{e_pro.nombre} </Card.Title>
        <hr />
        <div className="px-2">
          <h6>
            {e_pro.habitaciones} <FaBed /> : Habitaciones
          </h6>
          <h6>
            {e_pro.estacionamiento} <FaCar /> : Estacionamiento
          </h6>
          <h6>
            {e_pro.sshh} <FaBath /> : Baños{" "}
          </h6>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPropiedad;

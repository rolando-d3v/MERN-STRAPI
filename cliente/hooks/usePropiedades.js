import React from "react";
import CardPropiedad from "../components/casas/CardPropiedad";

function usePropiedades(dataPropiedades) {
  console.log(dataPropiedades);

  const Propiedades = () => {
    return (
      <div className="flex flex-wrap">
        {dataPropiedades.map((e_pro) => (
          <CardPropiedad e_pro={e_pro} key={e_pro._id} />
        ))}
      </div>
    );
  };

  return {
    Propiedades,
  };
}

export default usePropiedades;

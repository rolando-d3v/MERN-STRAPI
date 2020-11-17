import React, { useState, useEffect } from "react";
import axios from 'axios'
import User from "../components/user/User";

export default function Movie() {
  const [dataUser, setDataUser] = useState([]);

  const obtenerApi = async () => {
    const rex = await axios.get("https://jsonplaceholder.typicode.com/users")
    setDataUser(rex.data);
    console.log(rex.data);
  };

  useEffect(() => {
    obtenerApi();
  }, []);

  return (
    <div className='w-11/12  mx-auto ' >
      <h3>lista de usuarios</h3>
      <div className='flex flex-row flex-wrap' >
        {dataUser.map((ev) => (
          <User key={ev.id} ev={ev} />
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { FaSearch, FaUserAlt, FaMailBulk, FaLock } from "react-icons/fa";

export default function Themes() {
  const [dark, setDark] = useState(false);

  const changeTheme = () => {
    // setDark(dark === false ? true : false);
    setDark(!dark);
  };

  console.log(dark);

  return (
    <div>
      <button className="btn" onClick={changeTheme}>
        {" "}
        Cambiar Theme{" "}
      </button>

      <div
        className={`${
          dark ? "bg-black text-white" : " bg-gray-400 text-gray-900"
        }`}
      >
        <p>hola mundo</p>
        <p>hola mundo</p>
        <p>hola mundo</p>
      </div>

   <div className='w-10/12 md:w-6/12 mx-auto' >
   <section className=" flex items-center  py-2  ">
        <input
          className="bg-transparent border-b border-teal-500 mr-3 px-2 focus:outline-none py-3 hover:border-red-600 "
          style={{ width: "100%" }}
          type="text"
          placeholder="Search"
        />
        <button type="submit" className="btn flex  pr-10 items-center relative">
          Buscar
          <FaSearch className="h-5 w-5  right-0  mr-3 fill-current absolute" />
        </button>
      </section>
   </div>

      <div className=" w-11/12 md:w-2/4 mt-10  mx-auto">
        <form className="p-4   border border-gray-400 rounded-xl ">
          <h2 className="my-4 text-xl">Formulario </h2>
          <section className="relative flex items-center  my-4 ">
            <input
              className="bg-gray-200 px-4 py-2 w-full pr-16 rounded-xl focus:outline-none focus:bg-indigo-100"
              placeholder="Nombre"
              type="text"
            />
            <FaUserAlt className="h-5 w-5 fill-current  absolute  right-0 mx-4" />
          </section>

          <section className="relative flex items-center my-4 ">
            <input
              className="input_x  focus:bg-indigo-100"
              placeholder="Email"
              type="email"
            />
            <FaMailBulk className="h-5 w-5 fill-current  absolute  right-0 mx-4" />
          </section>

          <section className="relative flex items-center  my-4">
            <input
              className="bg-gray-200 px-4 py-2 w-full pr-16 rounded-xl focus:outline-none focus:bg-indigo-100"
              placeholder="Pasword"
              type="password"
            />
            <FaLock className="h-5 w-5 fill-current  absolute  right-0 mx-4" />
          </section>

          <section className="relative flex items-center  my-4 ">
            <input
              className="bg-gray-200 px-4 py-2 w-full pr-16 rounded-xl focus:outline-none focus:bg-indigo-100"
              placeholder="password"
              type="text"
            />
            <FaSearch className="h-5 w-5 fill-current  absolute  right-0 mx-4" />
          </section>
        </form>
      </div>
    </div>
  );
}

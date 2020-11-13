import React from "react";
import Link from "next/link";
import {
  FaIndent,
  FaOutdent,
  FaPenSquare,
  FaSearch,
  FaTable,
  FaSignOutAlt,
} from "react-icons/fa";

export const navList = [
  { icon: <FaPenSquare />, href: "/casas", menu: "Formulario" },
  { icon: <FaSearch />, href: "/", menu: "Busqueda" },
  { icon: <FaTable />, href: "/carousel", menu: "Tabla" },
  { icon: <FaOutdent />, href: "/tabla", menu: "Tabla" },
];

export const linksDerecho = [
  { icon: <FaIndent />, href: "/", menu: "Perfil" },
  { icon: <FaSignOutAlt />, href: "/tabla", menu: "Salir" },
];

function Sidebar() {
  return (
    <div
      className="h-full w-56 flex-shrink-0"
      style={{ backgroundColor: "#242528" }}
    >
      <div className="flex items-center my-4 mx-2 ">
        <img src="/tidal.png" alt="red" className="w-12 h-12 mx-2 " />
        <Link href="/">
          <a className="text-gray-400 text-3xl font-extrabold text-center tracking-widest ">Tidal</a>
        </Link>
      </div>
      <div className="">
        <ul className="w-full px-3 my-6 ">
          <h1 className="text-white pl-2 my-1 font-bold ">Mis Music </h1>
          {navList.map((nav, i) => (
            <li key={i} className="text-gray-400 w-48 ">
              <Link href={nav.href} key={i}>
                <a className="nav-link w-full rounded-xl hover:text-white hover:bg-gray-700 ">
                  <span className="mx-2">{nav.icon}</span>
                  {nav.menu}{" "}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <hr className="border border-gray-100" />

        <ul className="w-full px-3 my-4">
          <h1 className="text-white pl-2 my-1 font-bold ">Mis Listas </h1>
          {linksDerecho.map((nav, i) => (
            <li key={i} className=" text-gray-400 w-full  ">
              <Link href={nav.href} key={i}>
                <a className="nav-link w-full rounded-xl hover:text-white hover:bg-gray-700 ">
                  <span className="mx-2">{nav.icon}</span>
                  {nav.menu}{" "}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

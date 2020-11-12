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
  { icon: <FaTable />, href: "/tabla", menu: "Tabla" },
];

export const linksDerecho = [
  { icon: <FaIndent />, href: "/", menu: "Perfil" },
  { icon: <FaSignOutAlt />, href: "/tabla", menu: "Salir" },
];

function Sidebar() {
  return (
    <div className="h-full w-64 bg-black flex-shrink-0">
      <h1 className="text-gray-400 text-3xl text-center mt-4">Spotify</h1>
      <div>
        <ul>
          {navList.map((nav, i) => (
            <li className='nav-linkx text-gray-400 ' > 
              <Link href={nav.href} key={i}>
                  <a className='nav-linkx no-underline ' >
                      {nav.icon}
                       {nav.menu} </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

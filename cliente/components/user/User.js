import React from "react";
import {useRouter} from 'next/router'


export default function User({ ev }) {

    const router = useRouter()


  return (
    <div
      className="w-auto xl:flex bg-white rounded-lg p-4 m-2 border  border-gray-400 hover:border-orange-600  relative "
      style={{ width: "26.5rem" }}
    >
      <img
        className="mx-auto xl:m-4  h-20 w-20 md:h-24 md:w-24 "
        src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg"
      />
      <div className="text-center  xl:text-left text-xs sm:text-base px-7 ">
        <h2 className="text-lg">{ev.name} </h2>
        <div className="text-purple-500"> {ev.address.city} </div>
        <div className=" text-gray-600">{ev.email} </div>
        <div className="text-gray-600"> {ev.phone} </div>
        <div className="text-gray-600"> {ev.phone} </div>
      </div>
      <button className=" btn px-2 py-1  text-white float-right absolute right-0 bottom-0  m-3  focus:outline-none "
      
      onClick={ ()=> router.push('/movies/'+ ev.id) }
      >
        Vermas
      </button>
    </div>
  );
}

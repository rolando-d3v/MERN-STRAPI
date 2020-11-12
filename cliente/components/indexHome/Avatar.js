import Image from 'next/image'
import React from "react";

function Avatar() {
  return (
    <div>
      <div className="top h-64 w-full bg-blue-600 overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="hbb"
          className="bg w-full h-full object-cover object-center absolute z-0"
        />
        <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
          <Image
            // src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            src='/avatar.jpg'
            className="object-cover rounded-full"
            width={150}
            height={150}
          />
          <h1 className="text-2xl font-semibold">Antonia Howell</h1>
          <h4 className="text-sm font-semibold">Joined Since '19</h4>
        </div>
      </div>
    </div>
  );
}

export default Avatar;

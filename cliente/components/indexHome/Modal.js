import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Modal({ modal, closeModal, ModalChange }) {
  return (
    // <div >
    //     <button className='btn' onClick={()=> ModalChange()}  >modal</button>
    //   <div
    //     className={`${
    //       !modal
    //       ? "modal fixed top-0 left-0 w-full h-screen grid place-items-center invisible"
    //       : "modal fixed top-0 left-0 w-full h-screen grid place-items-center visible"
    //     }`}
    //     style={{ background: "rgba(0, 0, 0, 0.5)" }}
    //   >
    //     <div className="relative bg-gray-100 w-11/12 md:w-2/3 mx-auto rounded grid place-items-center h-64">
    //       <h1>Modal Content</h1>
    //       <button className="absolute top-0 right-0 m-4" onClick={closeModal}>
    //         <FaTimes className="text-red-400 text-4xl" />
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div>
      <button
        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white m-5 "
        onClick={() => ModalChange()}
      >
        show modal
      </button>

      <div
        className={`${
          !modal
            ? "modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 hidden"
            : "modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 visible"
        }`}
      >
        {/* <!-- modal --> */}
        <div className="bg-white rounded shadow-lg w-1/3">
          {/* <!-- modal header --> */}
          <div className="border-b px-4 py-2 flex justify-between items-center">
            <h3 className="font-semibold text-lg">Modal Title</h3>
            <button className="text-black close-modal">&cross;</button>
          </div>
          {/* <!-- modal body --> */}
          <div className="p-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
            delectus cumque fugiat nemo ducimus quae deserunt cupiditate
            sapiente incidunt aut accusantium dolore assumenda vitae similique,
            exercitationem voluptatum praesentium laboriosam nam.
          </div>
          <div className="flex justify-end items-center w-100 border-t p-3">
            <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1" onClick={closeModal} >
              Cancel
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">
              Oke
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

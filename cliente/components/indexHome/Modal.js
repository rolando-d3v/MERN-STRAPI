import React, { useState } from "react";

function Modal() {
  const [modal, setModal] = useState(true);

  const ModalChange = () => {
    setModal(modal ? false : true);
  };

  return (
    <div>
      <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white m-5 show-modal">
        show modal
      </button>

      <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 hidden">
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
            <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">
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

{
  /* 

  const modal = document.querySelector('.modal');

  const showModal = document.querySelector('.show-modal');
  const closeModal = document.querySelectorAll('.close-modal');

  showModal.addEventListener('click', function (){
    modal.classList.remove('hidden')
  });

  closeModal.forEach(close => {
    close.addEventListener('click', function (){
      modal.classList.add('hidden')
    });
  });
 */
}

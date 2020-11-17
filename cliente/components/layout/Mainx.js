import React,{useState} from "react";
import Avatar from "../indexHome/Avatar";
import Lista from "../indexHome/Lista";
import Modal from "../indexHome/Modal";


function Mainx() {

  const [modal, setModal] = useState(false);

    const ModalChange = () => {
      setModal(!modal);
    };

  const modalOpen = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="w-full  bg-black h-screen "     >
      <div className="">
        <Modal ModalChange={ModalChange} closeModal={closeModal} modal={modal}  />
      <Avatar  />
      <Lista/>
      <Lista/>
      </div>
    </div>
  );
}

export default Mainx;

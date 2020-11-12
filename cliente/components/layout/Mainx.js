import React from "react";
import Avatar from "../indexHome/Avatar";
import Lista from "../indexHome/Lista";
import Modal from "../indexHome/Modal";


function Mainx() {
  return (
    <div className="h-full w-full  bg-black px8 overflow-hidden  ">
      <div className="">
        <Modal/>
      <Avatar/>
      <Lista/>
      <Lista/>
      </div>
    </div>
  );
}

export default Mainx;

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import { FaBars } from "react-icons/fa";

export default function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="main-con">
      {showModal && <div className="overlay" onClick={()=>setShowModal(prev => !prev)}></div>}
      <FaBars
        className="menu-icon"
        onClick={() => setShowSideBar(!showSideBar)}
      />
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <button className="modal-btn" onClick={() => setShowModal(!showModal)}>
        Show Modal
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

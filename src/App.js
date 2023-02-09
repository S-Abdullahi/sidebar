import React from "react";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import { FaBars } from "react-icons/fa";

export default function App() {
  return (
    <div className="main-con">
      <div className="overlay"></div>
      <FaBars className="menu-icon" />
      <Sidebar />
      <button className="modal-btn">Show Modal</button>
      <Modal />
    </div>
  );
}

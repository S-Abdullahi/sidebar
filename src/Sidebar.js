import React from "react";
import logo from "./logo.svg";
import { FaTimes, FaHome, FaBehance } from "react-icons/fa";

export default function Sidebar() {
  return (
    <nav className="sidebar-con">
      <div className='sidebar-head'>
        <img src={logo} alt="logo" className="logo" />
        <FaTimes className="cancel"/>
      </div>
      <div className="menu-con">
        <ul>
          <li>
            <a href="#">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#">
              <FaHome /> Home
            </a>
          </li>
          <li>
            <a href="#">
              <FaHome /> Home
            </a>
          </li>
        </ul>
      </div>
      <div className="icon-con">
            <FaBehance/>
            <FaBehance/>
            <FaBehance/>
            <FaBehance/>
            <FaBehance/>
      </div>
    </nav>
  );
}

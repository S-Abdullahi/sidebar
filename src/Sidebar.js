import React from "react";
import logo from "./logo.svg";
import { FaTimes, FaHome, FaBehance } from "react-icons/fa";
import { links, social } from "./Data";

export default function Sidebar({showSideBar, setShowSideBar}) {
  return ( 
    <nav className={`sidebar-con ${showSideBar && 'show'}`}>
      <div className="sidebar-head">
        <img src={logo} alt="logo" className="logo" />
        <FaTimes className="cancel" onClick={()=>setShowSideBar(prev => !prev)}/>
      </div>
      <div className="menu-con">
        <ul>
          {links.map((link) => {
            const {id, url, text, icon} = link
            return (
              <li key={id}>
                <a href="#">
                  <span className="item-icon">{icon}</span> {text[0].toUpperCase() + text.slice(1)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="icon-con">
        {social.map((socialIcon, index) => {
          const {id, url, icon} = socialIcon
          return <a href="#" key={index}>
            <span className='social-icon'>{icon}</span>
        </a>
        })}
        
      </div>
    </nav>
  );
}

import React from 'react';
import { BsFillPersonFill, BsFillHandbagFill, BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { AiFillHeart, AiFillLock, AiOutlineBars } from 'react-icons/ai';
import { BiSolidMessageSquareDetail } from 'react-icons/bi';
import { FaBars, FaPowerOff } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <div className={'sidebar ' + (menuOpen && 'active')}>
        <div className={'bars ' + (menuOpen && 'active')}>
          <h4>Logo</h4>
          <FaBars onClick={() => setMenuOpen(!menuOpen)} />
        </div>
        <h3>Dashboard Menu</h3>
        <ul className={'navbar-nav ' + (menuOpen && 'active')}>
          <NavLink to="/dashboard/my-information" className="nav-item">
            <BsFillPersonFill />
            <span className="nav-link">My Information</span>
          </NavLink>
          <NavLink to="/dashboard/save-product" className="nav-item">
            <AiFillHeart />
            <span className="nav-link">Save Product</span>
          </NavLink>
          <NavLink to="/dashboard/messages" className="nav-item">
            <BiSolidMessageSquareDetail />
            <span className="nav-link">Messages</span>
          </NavLink>
          <NavLink to="/dashboard/purchases" className="nav-item">
            <BsFillHandbagFill />
            <span className="nav-link">Purchases</span>
          </NavLink>
          <NavLink to="/dashboard/change-password" className="nav-item">
            <AiFillLock />
            <span className="nav-link">Change Password</span>
          </NavLink>
          <NavLink to="/" className="nav-item">
            <FaPowerOff />
            <span className="nav-link">Logout</span>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

import React from 'react';
import { FaCartArrowDown, FaHome } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const NavMobile = () => {
  return (
    <nav className="mobile">
      <ul>
        <li>
          <NavLink className="link">
            <FaHome />
          </NavLink>
        </li>

        <li>
          <NavLink className="link">
            <FaCartArrowDown />
          </NavLink>
        </li>

        <li data-bs-toggle="modal" data-bs-target="#loginmodal">
          <BsPersonCircle />
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;

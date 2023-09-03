import React from 'react';
import { categories } from '../data';
import { BiSearch } from 'react-icons/bi';
import { FaCartArrowDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const NavbarOffcanvas = () => {
  return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
          <img src="/images/logo.png" alt="" width="80px" />
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="list-group mb-2">
          {categories?.map((c) => (
            <li key={c.id} className="list-group-item" data-bs-dismiss="offcanvas" aria-label="Close">
              <NavLink className="link" to="/c/123">
                {c.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="searchMenu">
          <div className="searchInput">
            <input type="text" placeholder="search milions fonts" />
            <BiSearch />
          </div>
          <div className="menuNav">
            <div className="menuItems">
              <button className="login" data-bs-toggle="modal" data-bs-target="#loginmodal">
                Login
              </button>
              <button className="signup" data-bs-toggle="modal" data-bs-target="#signupmodal">
                Sign Up
              </button>
            </div>
            <FaCartArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarOffcanvas;

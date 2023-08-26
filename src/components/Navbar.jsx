import React from 'react';
import { NavLink } from 'react-router-dom';

import { BiSearch } from 'react-icons/bi';
import { FaCartArrowDown } from 'react-icons/fa';
import { categories } from '../data';

import SignUpModal from './auth/SignUpModal';
import LoginModal from './auth/LoginModal';
import NavMobile from './NavMobile';
import NavbarOffcanvas from './NavbarOffcanvas';

const Navbar = () => {
  const currentUser = {
    id: 1,
    username: 'Anna',
    isSeller: true,
  };

  return (
    <>
      <nav className="navbar  navbar-expand-lg ">
        <div className="navbar-items">
          <div className="container">
            <NavLink className="navbar-brand">
              <img src="/images/logoJafont.png" alt="" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
          <div className="menu">
            <div className="container">
              <ul className="navbar-nav">
                {categories.map((c) => (
                  <li className="nav-item">
                    <NavLink to="/c/oke" className="nav-link">
                      {c.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <NavbarOffcanvas />

      <NavMobile />
      <SignUpModal />
      <LoginModal />
    </>
  );
};

export default Navbar;

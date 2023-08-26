import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { categories } from '../data';

import { BiSearch } from 'react-icons/bi';
import { FaCartArrowDown } from 'react-icons/fa';
import SignUpModal from './auth/SignUpModal';
import LoginModal from './auth/LoginModal';

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

      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Logo
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="list-group mb-2">
            {categories?.map((c) => (
              <li key={c.id} className="list-group-item">
                {c.name}
              </li>
            ))}
          </ul>

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

      <nav className="mobile">
        <ul>
          <li>
            <img src="/icons/house.svg" alt="" />
          </li>

          <li>
            <img src="/icons/heart.svg" alt="" />
          </li>
          <li>
            <img src="/icons/search-black.svg" alt="" />
          </li>
          <li>
            <img src="/icons/bag-2.svg" alt="" />
          </li>
          <li>
            <img src="/icons/user.svg" alt="" />
          </li>
        </ul>
      </nav>
      <SignUpModal />
      <LoginModal />
    </>
  );
};

export default Navbar;

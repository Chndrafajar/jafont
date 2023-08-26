import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { tokoPages } from '../../data';
import { NavLink } from 'react-router-dom';

const TokoAbout = () => {
  return (
    <div className="tokoPages">
      <div className="backgroundImg">
        <img src="/images/backToko.png" alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="card userCard ">
            <img src={tokoPages.user.imgToko} alt="" />
            <h6>{tokoPages.user.nameToko}</h6>
            <p>{tokoPages.user.descToko}</p>
            <div style={{ display: 'flex', gap: '30px' }}>
              <button className="fol">
                <AiOutlinePlus /> Follow
              </button>
              <button className="mes">Message</button>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/toko/123" className="nav-link">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/toko/about" className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <h4>About the Creator</h4>
            <div className="profile">
              <img src="/produk/profil.jpg" alt="" />
              <h5>Nestype</h5>
            </div>
            <p className="desc">
              Just love making pretty things :) Might as well earn some beans while I'm doing it :) Feel free to email me with any of your questions! nicky@nickylaatz.com Find a bunch of free goodies and limited-time specials on my website
              nickylaatz.com.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="cardAbout">
              <div className="follower">
                <div className="followerItem">
                  <h4>33,000</h4>
                  <span>followers</span>
                </div>
                <div className="followerItem">
                  <h4>100</h4>
                  <span>following</span>
                </div>
              </div>
              <div className="info">
                <div className="infoItems">
                  <img src="/icons/lokasi.svg" alt="" />
                  <h5>Jakarta,Indonesia</h5>
                </div>
                <div className="infoItems">
                  <img src="/icons/web.svg" alt="" />
                  <h5>nestype.com</h5>
                </div>
                <div className="infoItems">
                  <img src="/icons/fb.svg" alt="" />
                  <h5>Nestype_fb</h5>
                </div>
                <div className="infoItems">
                  <img src="/icons/pin.svg" alt="" />
                  <h5>Nestype_pin</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokoAbout;

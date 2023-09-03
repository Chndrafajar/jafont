import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { tokoPages } from '../../data';
import { NavLink } from 'react-router-dom';
import { BiSolidStar } from 'react-icons/bi';
import { FaCartArrowDown } from 'react-icons/fa';

const TokoPages = () => {
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
        <div className="filterToko">
          <div className="searchToko">
            <input type="text" placeholder="Search Product" />
            <button>Search</button>
          </div>
          <div className="selectToko">
            <select name="" id="">
              <option value="">All Categories</option>
              <option value="">All Categories</option>
              <option value="">All Categories</option>
              <option value="">All Categories</option>
            </select>
          </div>
        </div>
        <div className="row">
          {tokoPages?.produkToko.map((p) => (
            <div className="col-sm-6 col-xl-3 col-lg-4 col-12" key={p.id}>
              <div className="card">
                <div className="itemsProfil">
                  <img src={p.img} alt="" />
                  <img src={p.imgToko} alt="" className="profil" />
                  <div className="harga">
                    <h5>${p.price}</h5>
                  </div>
                </div>
                <div className="card-body">
                  <div className="name">
                    <h5> {p.name.substring(0, 26)}...</h5>
                  </div>
                  <NavLink to="/toko/123" className="by link">
                    by <b>{p.nameToko}</b> in <b>{p.categories}</b>
                  </NavLink>
                  <div className="info">
                    <div className="infoItems">
                      <div className="infoSales">
                        <div className="items">
                          {!isNaN(p.totalStars / p.starNumber) && (
                            <>
                              <div className="stars">
                                {Array(Math.round(p.totalStars / p.starNumber))
                                  .fill()
                                  .map((item, i) => (
                                    <BiSolidStar />
                                  ))}
                              </div>

                              <h6>({Math.round(p.totalStars / p.starNumber)})</h6>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="sales">
                        <span>{p.sales} sales</span>
                      </div>
                    </div>
                    <div className="btnDemo">
                      <NavLink to="/detail/123" className="link">
                        <button>
                          <FaCartArrowDown />
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-4" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="col-md-12">
            <div aria-label="Page navigation example" style={{ display: 'flex', justifyContent: 'center' }}>
              <ul className="paginationProduct">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokoPages;

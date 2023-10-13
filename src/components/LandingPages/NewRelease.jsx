import React from 'react';
import { Produk } from '../../data';
import { FiChevronRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { BiSolidStar } from 'react-icons/bi';
import { FaCartArrowDown } from 'react-icons/fa';

const NewRelease = () => {
  return (
    <>
      <div className="newRelease">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2>New Release</h2>
              <NavLink className="link" to="/c/oke">
                Explore <FiChevronRight />
              </NavLink>
            </div>
          </div>
          <div className="row">
            {Produk?.newRelease.map((p) => (
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
        </div>
      </div>
    </>
  );
};

export default NewRelease;

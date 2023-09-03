import React from 'react';
import { Produk } from '../../data';
import { FiChevronRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { BiSolidStar } from 'react-icons/bi';
import { FaCartArrowDown } from 'react-icons/fa';

const Fonts = () => {
  return (
    <>
      <div className="Fonts">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2>Fonts</h2>
              <NavLink className="link" to="/c/oke">
                Explore Fonts <FiChevronRight />
              </NavLink>
            </div>
          </div>
          <div className="row">
            {Produk?.StaffPick.map((p) => (
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
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item active">
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
    </>
  );
};

export default Fonts;

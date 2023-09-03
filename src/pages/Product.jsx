import React from 'react';
import { Produk, categories } from '../data';
import { NavLink } from 'react-router-dom';
import { BiSolidStar } from 'react-icons/bi';
import { FaCartArrowDown } from 'react-icons/fa';

const Product = () => {
  return (
    <>
      <div className="product">
        <div className="container">
          <div className="row">
            <div className="title">
              <h4>
                Showing results for <span>Fonts</span>
              </h4>
              <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Filters
              </button>
            </div>
          </div>
          <div className="row mb-5">
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
          <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="col-md-12">
              <div aria-label="Page navigation example" style={{ display: 'flex', justifyContent: 'center' }}>
                <ul className="paginationProduct">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item active">
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

        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title fs-5" id="exampleModalLabel">
                  <img src="/images/logo.png" alt="" width="80px" />
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="filters">
                  <label htmlFor="">Categories</label>
                  <select name="" id="">
                    {categories?.map((c) => (
                      <option key={c} value={c.slug}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="filters">
                  <label htmlFor="">Sub Categories</label>
                  <select name="" id="">
                    {categories?.map((c) => (
                      <option key={c} value={c.slug}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="filters">
                  <button className="btnPrimary">Filter Fonts</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

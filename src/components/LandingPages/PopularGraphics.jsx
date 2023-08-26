import React from 'react';
import { Produk } from '../../data';
import { FiChevronRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const PopularGraphics = () => {
  return (
    <div className="Popular">
      <div className="container">
        <div className="row">
          <div className="title">
            <h2>Graphics</h2>
            <NavLink to="/c/oke" className="link">
              Explore Fonts <FiChevronRight />
            </NavLink>
          </div>

          {Produk?.Graphics?.map((p) => (
            <div className="col-sm-6 col-lg-3 col-12" key={p.id}>
              <NavLink to="/c/oke" className="card link">
                <div className="items">
                  <img src={p.img} alt="" />
                  <img src={p.imgToko} alt="" className="profil" />
                </div>
                <div className="info">
                  <h5>{p.name}</h5>
                  <button>${p.price}</button>
                </div>
                <span>
                  by <b>{p.nameToko}</b> in <b>{p.categories}</b>
                </span>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularGraphics;

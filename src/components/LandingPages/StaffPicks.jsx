import React from 'react';
import { Produk } from '../../data';
import { FiChevronRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const StaffPicks = () => {
  return (
    <div className="Popular">
      <div className="container">
        <div className="row">
          <div className="title">
            <h2>Staff Picks</h2>
            <NavLink to="/c/oke" className="link">
              Explore Fonts <FiChevronRight />
            </NavLink>
          </div>

          {Produk?.StaffPicks?.map((p) => (
            <div className="col-sm-6 col-lg-3 col-12" key={p.id}>
              <NavLink className="card link" to="/c/oke">
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

export default StaffPicks;

import React, { useState } from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import NavDashborad from '../../components/dashboard/NavDashborad';
import FooterDashboard from '../../components/dashboard/FooterDashboard';
import { Produk } from '../../data';
import { NavLink } from 'react-router-dom';

const SaveProduct = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dashboard">
      <div className="dashboardLeft">
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div className="dashboardRight">
        <NavDashborad menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="itemsContent">
          <h2>Save Product</h2>
          <div className="row">
            {Produk?.Fonts?.map((p) => (
              <div className="col-sm-6 col-lg-3 col-12" key={p.id}>
                <NavLink to="/detail/oke" className="card link">
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
        <FooterDashboard />
      </div>
    </div>
  );
};

export default SaveProduct;

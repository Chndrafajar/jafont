import React, { useState } from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import NavDashborad from '../../components/dashboard/NavDashborad';
import FooterDashboard from '../../components/dashboard/FooterDashboard';

const Purchases = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="dashboard">
        <div className="dashboardLeft">
          <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <div className="dashboardRight">
          <NavDashborad menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="itemsContent">
            <h2>Purchases</h2>
            <div className="purchases">
              <div className="itemPurchases">
                <img src="/produk/produk1.png" alt="" className="produkImg" />
                <h4>Bison - A Powerful Sans Serif</h4>
                <img src="/icons/download.svg" className="iconDwon" alt="" />
              </div>
              <div className="itemPurchases">
                <img src="/produk/produk1.png" alt="" className="produkImg" />
                <h4>Bison - A Powerful Sans Serif</h4>
                <img src="/icons/download.svg" className="iconDwon" alt="" />
              </div>
              <div className="itemPurchases">
                <img src="/produk/produk1.png" alt="" className="produkImg" />
                <h4>Bison - A Powerful Sans Serif</h4>
                <img src="/icons/download.svg" className="iconDwon" alt="" />
              </div>
              <div className="itemPurchases">
                <img src="/produk/produk1.png" alt="" className="produkImg" />
                <h4>Bison - A Powerful Sans Serif</h4>
                <img src="/icons/download.svg" className="iconDwon" alt="" />
              </div>
              <div className="itemPurchases">
                <img src="/produk/produk1.png" alt="" className="produkImg" />
                <h4>Bison - A Powerful Sans Serif</h4>
                <img src="/icons/download.svg" className="iconDwon" alt="" />
              </div>
            </div>
          </div>
          <FooterDashboard />
        </div>
      </div>
    </>
  );
};

export default Purchases;

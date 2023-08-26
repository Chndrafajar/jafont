import React, { useState } from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import NavDashborad from '../../components/dashboard/NavDashborad';
import FooterDashboard from '../../components/dashboard/FooterDashboard';
import { NavLink } from 'react-router-dom';

const Messages = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dashboard">
      <div className="dashboardLeft">
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div className="dashboardRight">
        <NavDashborad menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="itemsContent">
          <h2>Messages</h2>
          <NavLink to="/dashboard/messages/oke" className="messages">
            <div className="info">
              <img src="/produk/profil.jpg" alt="" />
              <h5>Nestype</h5>
            </div>

            <p>isi pesan menampilkan 30 character</p>
            <img src="/icons/delete.svg" alt="" />
          </NavLink>
          <NavLink to="/dashboard/messages/oke" className="messages">
            <div className="info">
              <img src="/produk/profil.jpg" alt="" />
              <h5>Nestype</h5>
            </div>

            <p>isi pesan menampilkan 30 character</p>
            <img src="/icons/delete.svg" alt="" />
          </NavLink>
          <NavLink to="/dashboard/messages/oke" className="messages">
            <div className="info">
              <img src="/produk/profil.jpg" alt="" />
              <h5>Nestype</h5>
            </div>

            <p>isi pesan menampilkan 30 character</p>
            <img src="/icons/delete.svg" alt="" />
          </NavLink>
        </div>
        <FooterDashboard />
      </div>
    </div>
  );
};

export default Messages;

import React, { useState } from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import NavDashborad from '../../components/dashboard/NavDashborad';
import FooterDashboard from '../../components/dashboard/FooterDashboard';
import { NavLink } from 'react-router-dom';

const MessagesId = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dashboard">
      <div className="dashboardLeft">
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div className="dashboardRight">
        <NavDashborad menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="itemsContent">
          <h6>Back</h6>
          <div className="messagesIdLeft">
            <div className="messagesIdUser">
              <img src="/produk/profil.jpg" alt="" />
              <h5>Nestype</h5>
            </div>
            <p>Hallo bro saya mau tanya tentang font anda, apakah saya bisa menerapkan untuk promosi bisnis saya ?</p>
            <hr />
          </div>
          <div className="messagesIdRight">
            <div className="messagesIdUser">
              <img src="/produk/profil.jpg" alt="" />
              <h5>Nestype</h5>
            </div>
            <p>Ya tentu, anda dapat membeli lisensi komersial untuk hal tersebut</p>
            <hr />
          </div>
          <div className="messagesIdLeft">
            <div className="messagesIdUser">
              <img src="/produk/profil.jpg" alt="" />
              <h5>Nestype</h5>
            </div>
            <p>Oke bro</p>
            <hr />
          </div>
          <div className="pesanInput">
            <input type="text" placeholder="your pesan" name="" id="" />
            <button>Send</button>
          </div>
        </div>
        <FooterDashboard />
      </div>
    </div>
  );
};

export default MessagesId;

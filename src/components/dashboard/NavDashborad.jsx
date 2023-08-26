import React from 'react';
import { FaBars } from 'react-icons/fa';

const NavDashborad = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav className="navDash">
        <div className={'dashbars ' + (menuOpen && 'active')}>
          <FaBars onClick={() => setMenuOpen(!menuOpen)} />
        </div>
        <div className="itemsRight">
          <img src="/produk/profil.jpg" alt="" />
          <div className="info">
            <h4>Nestype</h4>
            <span>email@gmail.com</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavDashborad;

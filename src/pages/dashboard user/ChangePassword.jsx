import React, { useState } from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import NavDashborad from '../../components/dashboard/NavDashborad';
import FooterDashboard from '../../components/dashboard/FooterDashboard';

const ChangePassword = () => {
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
            <h2>Change Password</h2>
            <form action="">
              <div className="formItems">
                <label htmlFor="">Old Password</label>
                <div className="inputItems">
                  <input type="password" placeholder=".........." />
                  <span>Edit</span>
                </div>
              </div>
              <div className="formItems">
                <label htmlFor="">New Password</label>
                <div className="inputItems">
                  <input type="password" placeholder=".........." />
                  <span>Edit</span>
                </div>
              </div>
              <div className="formItems">
                <label htmlFor="">Repeat Password</label>
                <div className="inputItems">
                  <input type="password" placeholder=".........." />
                  <span>Edit</span>
                </div>
              </div>
              <button className="saveBtn">Save</button>
            </form>
          </div>
          <FooterDashboard />
        </div>
      </div>
    </>
  );
};

export default ChangePassword;

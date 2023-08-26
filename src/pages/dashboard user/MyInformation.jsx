import React, { useState } from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import NavDashborad from '../../components/dashboard/NavDashborad';
import FooterDashboard from '../../components/dashboard/FooterDashboard';

const MyInformation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="dashboard">
        <div className="dashboardLeft">
          <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <div className="dashboardRight ">
          <NavDashborad menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="itemsContent">
            <h2>My Information</h2>
            <form action="">
              <div className="formItems">
                <label htmlFor="">Name</label>
                <div className="inputItems">
                  <input type="text" placeholder="name" />
                  <span>Edit</span>
                </div>
              </div>
              <div className="formItems">
                <label htmlFor="">Country</label>
                <div className="inputItems">
                  <input type="text" placeholder="country" />
                  <span>Edit</span>
                </div>
              </div>
              <div className="formItems">
                <label htmlFor="">Email</label>
                <div className="inputItems">
                  <input type="text" placeholder="@email.com" />
                  <span>Edit</span>
                </div>
              </div>
              <div className="formItems">
                <label htmlFor="">Your Company</label>
                <div className="inputItems">
                  <input type="text" placeholder="your company" />
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

export default MyInformation;

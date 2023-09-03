import React from 'react';
import { NavLink } from 'react-router-dom';
import './auth.scss';

const SignUpModal = () => {
  return (
    <div className="modal fade" id="signupmodal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-5">
          <div className="modal-header">
            <div className="modal-title fs-5" id="exampleModalLabel">
              <img src="/images/logo.png" alt="" width="80px" />
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body signupModal">
            <h3 className="titleSignin">Sign Up to Jafont</h3>
            <form action="" className="formSignin">
              <div className="inputStyle">
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                  <input type="text" placeholder="First Name" className="formInput" style={{ width: '100%' }} />
                  <input type="text" placeholder="Last Name" className="formInput" style={{ width: '100%' }} />
                </div>
                <input type="text" placeholder="Username" className="formInput" />
                <input type="email" placeholder="Email" className="formInput" />
                <input type="password" placeholder="Password" className="formInput" />
              </div>

              <button style={{ marginTop: '20px' }}>Create Account</button>
              <div className="garis">
                <div></div>
                <span>Or</span>
                <div></div>
              </div>
              <span className="btnGoogle">
                <img src="/icons/google.svg" alt="" />
                Sign Up With Google
              </span>
              <div className="titlePertanyaan">
                <h5>
                  Have an account?
                  <span data-bs-toggle="modal" data-bs-target="#loginmodal">
                    Log in!
                  </span>
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;

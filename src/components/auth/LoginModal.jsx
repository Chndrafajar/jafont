import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginModal = () => {
  return (
    <div className="modal fade" id="loginmodal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-5">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body signupModal">
            <h3 className="titleSignin">Login to Creative</h3>
            <form action="">
              <div className="inputStyle">
                <input type="text" placeholder="Username" className="formInput" />
                <input type="password" placeholder="Password" className="formInput" />
              </div>
              <div className="loginForPas">
                <NavLink>Forgot Password?</NavLink>
              </div>
              <button>Login</button>

              <div className="garis">
                <div></div>
                <span>Or</span>
                <div></div>
              </div>
              <span className="btnGoogle">
                <img src="/icons/google.svg" alt="" />
                Login With Google
              </span>
              <div className="titlePertanyaan">
                <h5>
                  Don't have account yet?
                  <span data-bs-toggle="modal" data-bs-target="#signupmodal">
                    Sign Up!
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

export default LoginModal;

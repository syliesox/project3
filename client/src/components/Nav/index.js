import React from "react";
import "./style.css";
// import { NavLink } from 'react-router-dom';

const production  = 'https://retirement-calculator-24.herokuapp.com';
const development = 'http://localhost:5000';
const url = (process.env.NODE_ENV ? production : development);

function Nav(props) {
    const renderLoginBtn = () => {
      if (props.isAuthenticated) {
        return (
            <a href={url + "/api/logout"}>
              <div className="google-btn">
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="signout"
                  />
                </div>
                <p className="btn-text">
                  <b>Logout</b>
                </p>
              </div>
            </a>
          
        )
      } else {
        return (
          <a href={url + "/auth/google"}>
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="signin"
                />
              </div>
              <p className="btn-text">
                <b>Log in with Google</b>
              </p>
            </div>
          </a>
        )
      }
    }

    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-white col-sm-12 px-0 container-fluid sticky-top shadow"id="banner">  
          <h4 className="title">Retirement Calculator</h4> 
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                  {/* <li> <a href="https://travel.state.gov/content/travel/en/international-travel/while-abroad/retirement-abroad.html" target="_blank" rel="noopener noreferrer"> Global Retirement Considerations </a></li> */}
                <li>
                  <div className="google-btn-container">
                    {renderLoginBtn()}
                  </div>
                </li>
              </ul>
          </div>
      </nav>
    );
}

export default Nav;

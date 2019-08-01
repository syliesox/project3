import React from "react";
// import { NavLink } from 'react-router-dom';


function Nav() {
    return (
    <div className="container-fluid sticky-top">
    <div className="row">
        <div className="col-xl-2 bg-white"></div>
          <div className="col-xl-8 px-0">
            <nav className="navbar navbar-expand-sm navbar-light bg-white"id="banner">  
                <h2 className="text-blue">Global Retirement Calculator</h2> 
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li> <a href="https://travel.state.gov/content/travel/en/international-travel/while-abroad/retirement-abroad.html" target="_blank" rel="noopener noreferrer"> Global Retirement Considerations </a></li>
                    </ul>   
                </div>
            </nav>
          </div>
        <div className="col-xl-2 bg-white"></div>
    </div>
  
</div>


    );
}

export default Nav;

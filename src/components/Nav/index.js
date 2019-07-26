import React from "react";

function Nav() {
    return (
    <div class="container-fluid sticky-top">
    <div class = "row">
        <div class="col-xl-2 bg-white"></div>
          <div class="col-xl-8 px-0">
            <nav class="navbar navbar-expand-sm navbar-light bg-white"id="banner">  
                <h2 className="text-blue">Global Retirement Calculator</h2> 
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li> <a href="https://travel.state.gov/content/travel/en/international-travel/while-abroad/retirement-abroad.html" target="_blank"> Global Retirement Considerations </a></li>
                    </ul>   
                </div>
            </nav>
          </div>
        <div class="col-xl-2 bg-white"></div>
    </div>
</div>

    );
}

export default Nav;

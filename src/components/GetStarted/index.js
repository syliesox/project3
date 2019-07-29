import React from "react";
import "./style.css";

function GetStarted() {
    return (
    // <div class="col-md-6 solution">
    // <div class="solution-header">
    //     <h3 id="description-header">Looking for Retirement Solutions?</h3>
            
    //      <h5>Retire abroad with the Global Retirement Calculator!</h5>
      
    // </div>

    // <div class="panel-info" id="add-panel">
    //     <div class="panel-heading"></div>
    //         <div class="panel-body">
    //             <button class="btn btn-info" id="submit-btn" type="submit">Yes!</button>
    //         </div>
    //     </div>
    // </div>

    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 solution">
            <div class="solution-header"> 
                <h3>Global Retirement Solutions</h3>
                <div class="panel-body">
                    <button class="btn btn-info" id="submit-btn" type="submit">Get Started</button>
                </div>
           </div>

            <div class="panel-info" id="add-panel">
                <div class="panel-heading">
                </div>
               
            </div>
        </div>
    </div>
    )
}

export default GetStarted;
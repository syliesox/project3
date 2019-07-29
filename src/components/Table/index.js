import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import "./style.css";

class Table extends React.Component {
    render() {
        return (
            // User Input and Database info being displayed
            <div className="container user-info">
                <div className="row">
                    <div className="col-md-12">
        
                        {/* Current User Info */}
                        <div className="card mb-4 transparent">
                            <div className="card-header"><h2>Your Retirement Info</h2></div>
                            <div className="card-body">
                                <table className="table table-sm table-hover" id='scenario-table'>
                                    <thead>
                                        <tr>
                                            <th scope="col" className='col-xs-8' id="col1">Assets</th>
                                            <th scope="col" className='col-xs-2' id="col2">Income In<br />Retirement</th>
                                            <th scope="col" className='col-xs-1' id="col3">Retirement<br />Age</th>
                                            <th scope="col" className='col-xs-2' id="col4">City</th>
                                            <th scope="col" className='col-xs-2' id="col5">Retirement<br />Fund</th>
                                            <th scope="col" className='col-xs-2' id="col6">Need</th>
                                            {/* <th scope="col" class='col-xs-1'>Remove</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Table;
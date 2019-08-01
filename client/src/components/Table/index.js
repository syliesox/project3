import React from 'react';
// import { withRouter } from 'react-router-dom';
import "./style.css";
import InputForm from '../InputForm';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showInfoForm: false,
            hideTable: false
        };
    }
    
    onClick(e) {
        e.preventDefault();
        this.setState({
            showInfoForm: !this.showInfoForm,
            hideTable: !this.hideTable
        })
        
    }

    render() {
        const {hideTable} = this.state;
        return (
            // User Input and Database info being displayed
            <div className="container user-info">
                <div className="row">
                    <div className="col-md-12">
        
                        {/* Current User Info */}
                        <div className={`card mb-4 table-header ${hideTable ? 'hide' : ''}`}>
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
                                <button onClick={ (e) => this.onClick(e) } className="btn btn-info float-right" id="info-btn">Add New City</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="inputForm">
                            {  this.state.showInfoForm && <InputForm />  }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Table;
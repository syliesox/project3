import React from 'react';
// import { withRouter } from 'react-router-dom';
// import axios from 'axios';
import "./style.css";
import Table from '../Table';

class InputForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showTable: false,
            hideInfoForm: false,
            assets: '',
            income: '',
            age: ''

        };
    }
    
    onClick(e) {
        e.preventDefault();
        this.setState({
            showTable: !this.showTable,
            hideInfoForm: !this.hideInfoForm
        })
        
    }

    render() {
        const {hideInfoForm} = this.state;
        return (
            <div>
                <div className="row">
                    <div class="col-md-12">
                        {/* Add User Info */}
                        <div className={`card mb-4 info-header ${hideInfoForm ? 'hide' : ''}`}>
                            <div className="card-header"><h2>Add Your Info</h2></div>
                            <div className="card-body">

                                {/* Entry Form */}
                                <form>
                                    <div className="form-group">
                                        <label for="assets-input">IRA/401k Assets [$]</label>
                                        <input name="assets" onChange={this.handleChange} value="this.state.assets" className="form-control" id="assets-input" type="number" min="0" placeholder="Enter an amount here" />
                                    </div>
                                    <div className="form-group">
                                        <label for="income-input">Average Annual Retirement Income [$]</label>
                                        <input name="income" onChange={this.handleChange} value="this.state.income" className="form-control" id="income-input" type="number" min="0" placeholder="Enter an amount here"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="retirement-age-input">Desired Retirement Age</label>
                                        <input name="age" onChange={this.handleChange} value="this.state.age" className="form-control" id="retirement-age-input" type="number" min="0" max="80" placeholder="Enter a number here"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="city-input">City</label>
                                        <form>
                                            <select id="city-select">
                                                <option value="Naples, Italy">Naples, Italy</option>
                                                <option value="Dubai, United arab Emirates">Dubai, United Arab Emirates</option>
                                                <option value="Cebu, Philippines">Cebu, Philippines</option>
                                                <option value="Shanghai, China">Shanghai, China</option>
                                                <option value="Manchester, United Kingdom">Manchester, United Kingdom</option>
                                                <option value="Casablanca, Morocco">Casablanca, Morocco</option>
                                                <option value="New Orleans, Louisiana">New Orleans, Louisiana</option>
                                                <option value="Granada, Spain">Granada, Spain</option>
                                                <option value="Phoenix, Arizona">Phoenix, Arizona</option>
                                                <option value="Goa, India">Goa, India</option>
                                            </select>
                                        </form>
                                    </div>

                                    <button onClick={ (e) => this.onClick(e) } className="btn btn-info float-right" id="info-btn">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="inputForm">
                            {  this.state.showTable && <Table />  }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InputForm;



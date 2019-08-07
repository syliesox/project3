import React, { Component } from "react";
import API from "../utils/API";
// import BackgroundMap from '../components/BackgroundMap';
import { GetStarted } from "../components/GetStarted";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/InputForm";
import Select from 'react-select';
import "./MainPage.css";
// import Table from "../components/Table";
// import { List, ListItem } from "../components/Table";
import { Link } from "react-router-dom";
import DeleteBtn from '../components/DeleteBtn';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const cities = [
    { label: "Naples, Italy", value: "Naples, Italy" },
    { label: "Dubai, United arab Emirates", value: "Dubai, United arab Emirates" },
    { label: "Cebu, Philippines", value: "Cebu, Philippines" },
    { label: "Shanghai, China", value: "Shanghai, China" },
    { label: "Manchester, United Kingdom", value: "Manchester, United Kingdom" },
    { label: "Casablanca, Morocco", value: "Casablanca, Morocco" },
    { label: "New Orleans, Louisiana", value: "New Orleans, Louisiana" },
    { label: "Granada, Spain", value: "Granada, Spain" },
    { label: "Phoenix, Arizona", value: "Phoenix, Arizona" },
    { label: "Goa, India", value: "Goa, India" },
];

class MainPage extends Component {

    state = {
        userData: [],
        id: "",
        assets: "",
        income: "",
        age: "",
        city: ""
    }

    

    componentDidMount() {
        this.loadScenario();
      }

    loadScenario = () => {
        API.getScenarios()
          .then(res =>
            this.setState({ userData: res.data, assets: "", income: "", age: "" })
          )
          .catch(err => console.log(err));
      };

    deleteScenario = id => {
    API.deleteScenario(id)
        .then(res => this.loadScenario())
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

    handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.assets && this.state.income && this.state.age) {
        API.saveScenario({
        user_name: "username",
        _id: this.state.id,
        total_assets: this.state.assets,
        income_in_retirement: this.state.income,
        retirement_age: this.state.age,
        target_city: this.state.city
        })
        .then(res => this.loadScenario())
        .catch(err => console.log(err));
    }
    };

    render() {
        
        return (
            <div className='wrapper'>
                {/* <BackgroundMap /> */}
                <Container fluid>
                    <Row>
                        <Col className='offset-2' size='md-8 get-started'>
                            <GetStarted />
                        </Col>
                    </Row>
                    <Row >
                        <Col size='md-12 form'>
                            <form>
                                <h3>Add Info</h3>
                                {/* User input assets */}
                                <label name="assets-input">IRA/401k Assets [$]</label>
                                <Input
                                    value={this.state.assets}
                                    onChange={this.handleInputChange}
                                    name="assets"
                                    type="number"
                                    placeholder="Enter amount here (required)"
                                />
                                {/* User input retirement income */}
                                <label name="income-input">Average Annual Retirement Income [$]</label>
                                <Input
                                    value={this.state.income}
                                    onChange={this.handleInputChange}
                                    name="income"
                                    type="number"
                                    placeholder="Enter amount here (required)"
                                />
                                {/* User input age */}
                                <label name="retirement-age-input">Desired Retirement Age</label>
                                <Input
                                    value={this.state.age}
                                    onChange={this.handleInputChange}
                                    name="age"
                                    type="number"
                                    placeholder="Enter age here (required)"
                                />
                                {/* User input city */}
                                <label name="city-input">Select Desired City</label>
                                <Select options={ cities } />
                                <FormBtn
                                disabled={!(this.state.assets && this.state.income && this.state.age)}
                                onClick={this.handleFormSubmit}
                                >
                                Submit
                                </FormBtn>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size='md-12 table' >
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col" value="assets" className='col-md-2' id="col1">Assets</th>
                                        <th scope="col" value="income" className='col-md-2' id="col2">Income In<br />Retirement</th>
                                        <th scope="col" value="age" className='col-md-2' id="col3">Retirement<br />Age</th>
                                        <th scope="col" value="city" className='col-md-3' id="col4">City</th>
                                        <th scope="col" value="funds" className='col-md-2' id="col5">Retirement<br />Fund</th>
                                        <th scope="col" value="need" className='col-md-2' id="col6">Need</th>
                                        <th scope="col" value="delete" className='col-md-1' id="col6">Delete</th>
                                    </tr>
                                </thead>

                                {this.state.userData.length ? (
                                    this.state.userData.map(scenario => (
                                        <tr>
                                            <td>{scenario.total_assets}</td>
                                            <td>{scenario.income_in_retirement}</td>
                                            <td>{scenario.retirement_age}</td>
                                            <td><Link to={"/scenarios/" + scenario._id}>{scenario.target_city}</Link></td>
                                            <td>funds</td>
                                            <td>need</td>
                                            <td><DeleteBtn /></td>
                                        </tr>
                                    ))
                                ) : (
                                    <h3>No results to display yet!</h3>
                                )}
                            </table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default MainPage
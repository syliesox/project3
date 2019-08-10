import React, { Component } from "react";
import API from "../utils/API";
// import BackgroundMap from '../components/BackgroundMap';
import { GetStarted } from "../components/GetStarted";
import { Col, Row, Container } from "../components/Grid";
import { Input, SelectCity, FormBtn } from "../components/InputForm";
import "./MainPage.css";
// import Table from "../components/Table";


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            assets: "",
            income: "",
            age: "",
            city: "",
            isAuthenticated: false
        }

        this.fetchUserStatus = this.fetchUserStatus.bind(this);
    }

    componentDidMount() {
        this.loadScenario();
        this.fetchUserStatus();
      }

    fetchUserStatus() {
        API.getLoginStatus().then(res => 
        // console.log(res)
           this.setState({ isAuthenticated: res.data ? true : false })    
        );
    }

    loadScenario = () => {
        API.getScenario()
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
        assets: this.state.assets,
        income: this.state.income,
        age: this.state.age
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
                    {this.state.isAuthenticated && 
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
                                <SelectCity
                                    value={this.state.city}
                                    onChange={this.handleInputChange}
                                    name="city"
                                />
                                <FormBtn
                                disabled={!(this.state.assets && this.state.income && this.state.age)}
                                onClick={this.handleFormSubmit}
                                >
                                Submit
                                </FormBtn>
                            </form>
                        </Col>
                    </Row>
                    }
                    {this.state.isAuthenticated &&
                    <Row>
                        <Col size='md-12 table' >

                            {/* <Table userData={this.state.userData} /> */}

                            {/* OR */}

                            {/* <div>
                                <div className="card-header">
                                    <h2>Your Retirement Info</h2>
                                    <p>Click on a city's name to see info about that city.</p>
                                </div>
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
                                                <th scope="col" className='col-xs-2' id="col6">Delete</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {/* <DeleteBtn /> */}
                                        {/* </tbody>
                                    </table>
                                </div> */}
                            {/* </div> */}
                        </Col>
                    </Row>
                    }
                </Container>
            </div>
        );
    }

}

export default MainPage
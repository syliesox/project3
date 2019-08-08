import React, { Component } from "react";
import API from "../utils/API";
// import BackgroundMap from '../components/BackgroundMap';
import { GetStarted } from "../components/GetStarted";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/InputForm";
import Select from 'react-select';
import "./MainPage.css";
// import Table from "../components/Table";
// import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import DeleteBtn from '../components/DeleteBtn';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const cityname = "New Orleans, Louisiana"
var cpir;

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

const AtlantaCpiR = 59.6549832654245;
const AtlantaMin = 50000;

// By extending the React.Component class, MainPage inherits functionality from it
class MainPage extends React.Component {

// Setting the initial state of the MainPage component
    state = {
        userData: [],
        id: "",
        assets: "",
        income: "",
        age: "",
        city: ""
    }

    componentDidMount() {
        this.loadScenarios();
    }

    loadScenarios = () => {
        API.getScenarios()
            .then(res =>
                this.setState({ userData: res.data, assets: "", income: "", age: "", city: "" })
            )
            .catch(err => console.log(err));
    };

    // loadNumbeo = () => {
    //     API.getNumbeo(cityName)
    //       .then(res =>
    //         this.setState({ userData: res.data, assets: "", income: "", age: "",  city: ""})
    //       )
    //       .catch(err => console.log(err));
    //   };

    deleteScenario = id => {
        API.deleteScenario(id)
            .then(res => this.loadScenarios())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleChange = city => {
        this.setState({ city });
        // console.log(`Option selected:`, selectedOption);
      };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.assets && this.state.income && this.state.age) {
            if (cityname === "Naples, Italy"){
                cpir = 40.65343800624011;
            }
            else if (cityname === "Dubai, United arab Emirates"){
                cpir = 60.344308883038124;
            }
            else if (cityname === "Cebu, Philippines"){
                cpir = 24.68352402508564;
            }
            else if (cityname === "Shanghai, China"){
                cpir = 41.3093973241673;
            }
            else if (cityname === "Manchester, United Kingdom"){
                cpir = 47.33519074664601;
            }
            else if (cityname === "Casablanca, Morocco"){
                cpir = 25.37699284160013;                ;
            }
            else if (cityname === "New Orleans, Louisiana"){
                cpir = 63.194776006844265;
            }
            else if (cityname === "Granada, Spain"){
                cpir = 37.49249300604065;
            }
            else if (cityname === "Phoenix, Arizona"){
                cpir = 51.57627856974486;
            }
            else if (cityname === "Goa, India"){
                cpir = 16.734851081616867;
            }
    
            API.saveScenario({
                user_name: "username",
                // _id: this.state.id,
                total_assets: this.state.assets,
                income_in_retirement: this.state.income,
                retirement_age: this.state.age,
                target_city: cityname,
                city_cpir: cpir
            })
                .then(res => this.loadScenarios())
                .catch(err => console.log(err));
        }
    };

// The render method returns the JSX that should be rendered
    render() {
        const { city } = this.state;
        return (
            <div className='wrapper'>
                {/* <BackgroundMap /> */}
                <Container fluid>
                    <Row>
                        <Col size='md-8 get-started'>
                            <GetStarted />
                        </Col>
                    </Row>

                    <Row>
                        <Col size='md-8 form'>
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

                                <Select
                                    onChange={this.handleChange}
                                    options={ cities }
                                    name="city"
                                    value={this.state.city}
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
                    <Row>
                        <Col size='md-8 table' >
                            <table>
                                <thead>
                                    <tr>
                                        <th scope="col" value="assets" id="col1">Total<br />Assets<br />[$]</th>
                                        <th scope="col" value="income" id="col2">Annual<br />Retirement<br />Income [$/yr]</th>
                                        <th scope="col" value="age" id="col3">Age<br />at<br />Retirement</th>
                                        <th scope="col" value="city" id="col4"><br /><br />City</th>
                                        <th scope="col" value="funds" id="col5">Retirement<br />Fund<br />[$]</th>
                                        <th scope="col" value="need" id="col6"><br />Need<br />[$]</th>
                                        <th scope="col" value="delete" id="col7"><br /><br />Delete</th>
                                    </tr>
                                </thead>

                                {this.state.userData.length ? (
                                    this.state.userData.map(scenario => (
                                        <tr key={scenario._id}>
                                            <td>{(scenario.total_assets).toLocaleString(navigator.language, { maximumFractionDigits: 0 })}</td>
                                            <td>{(scenario.income_in_retirement).toLocaleString(navigator.language, { maximumFractionDigits: 0 })}</td>
                                            <td>{scenario.retirement_age}</td>
                                            <td><Link to={"/city/" + scenario.target_city}>{scenario.target_city}</Link></td>
                                            <td>{(scenario.total_assets + (80 - scenario.retirement_age) * scenario.income_in_retirement).toLocaleString(navigator.language, { maximumFractionDigits: 0 })}</td>
                                            <td> {((80 - scenario.retirement_age) * AtlantaMin * scenario.city_cpir / AtlantaCpiR).toLocaleString(navigator.language, { maximumFractionDigits: 0 })}
                    
                                            </td>
                                            <td>

                         

                                            <DeleteBtn onClick={() => this.deleteScenario(scenario._id)} /></td>
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
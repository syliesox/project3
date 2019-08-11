import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import "./City.css";
import Jumbotron from "../components/Grid";

class City extends Component {
  state = {
    scenario: []
  };

  // When this component mounts, grab the scenario with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log(this.props.match.params)
    API.getScenario(this.props.match.params.id)
      .then(res => this.setState({ scenario: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
        <Container fluid>
            <Row>
                <Col size='md-12 city-info'>
                    <Jumbotron className="jumbotron">
                        <h3>{this.state.scenario.id}</h3>
                        <h3>{this.state.scenario.cityname}</h3>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-2 back">
                    <Link to="/">← Back to Main Page</Link>
                </Col>
            </Row>
            <Row>
                <Col size="md-8 user-info">
                    <article>
                        <h3>More City Information</h3>
                        <p>Cost of Living: </p>
                        <p>Property Prices: </p>
                        <p>Crime: </p>
                        <p>Health Care: </p>
                        <p>Pollution: </p>
                        <p>Traffic: </p>
                        <p>Quality of Life: </p>
                        <p>Travel: </p>
                    </article>
                </Col>
                <Col size="md-3 user-info">
                    <article>
                        <h3>Your Retirement Info</h3>
                        <p>Assets: {this.state.scenario.assets}</p>
                        <p>Income: {this.state.scenario.income}</p>
                        <p>Age: {this.state.scenario.age}</p>
                    </article>
                </Col>
            </Row>
            <Row>
                <Col size="md-2 back">
                    <Link to="/">← Back to Main Page</Link>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default City;
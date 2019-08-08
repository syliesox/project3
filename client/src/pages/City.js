import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class City extends Component {
  state = {
    scenario: {}
  };
  // When this component mounts, grab the scenario with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getScenario(this.props.match.params.id)
      .then(res => this.setState({ scenario: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
        <Container fluid>
            <Row>
                <Col size='md-12 get-started'>
                    <div>
                        <h3>{this.state.scenario.target_city}</h3>
                    </div>
                </Col>
            </Row>
        
            <Row>
                <Col size="md-10 get-started">
                    <article>
                        <h3>Your Retirement Info</h3>
                        <p>Assets: {this.state.scenario.total_assets}</p>
                        <p>Income: {this.state.scenario.income_in_retirement}</p>
                        <p>Age: {this.state.scenario.retirement_age}</p>
                    </article>
                </Col>
            </Row>
            <Row>
                <Col size="md-2 get-started">
                    <Link to="/">← Back to Main Page</Link>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default City;
import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/BackgroundMap";
import { Container, Row, Col } from "../components/ResultsGrid";
import InputForm from "../components/InputForm";
import SavedResult from "../components/SavedResult"


class MainPage extends Component {
    //create state
    state = {
        search: "",
        results: [],
        error: "",
        message: ""
    };

    //function to take value of what enter in the search bar
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        // once it clicks it connects to the Numbeo api with the search value
        API.getNumbeo(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    // store response in a array
                    let results = res.data.items
                    //map through the array 
                    results = results.map(result => {
                        //store each API information in a new object 
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    // reset the state of the empty API array to the new arrays of objects with properties geting back from the response
                    this.setState({ apiInfo: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.apiInfo)
        let savedApiInfo = this.state.apiInfo.filter(retirement => retirement.id === event.target.id)
        savedApiInfo = savedApiInfo[0];
        API.saveInfo(savedApiInfo)
            .then(this.setState({ message: alert("Your retirement info is saved") }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white">Retire Abroad with the Global Retirement Calculator!</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <InputForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SavedResult apiInfo={this.state.apiInfo} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }


}

export default MainPage
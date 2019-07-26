import React from "react";
import "./style.css";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="SearchLabel"><h2>Looking for Retirement Solutions?</h2></label>
                <label className="SearchLabel"><h3>Retire Abroad with the Global Retirement Calculator!</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="yes"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Yes!
            </button>
        </form>
    )
}
import React from "react";
import "./style.css";
import {Row, Col} from "../Grid"

const InputForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="InputLabel"><h3>User Input</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="data"
                    placeholder="Enter User Info"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}

    export default InputForm;


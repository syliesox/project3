import React from "react";
import "./style.css";

function InputForm() {
    return (

        <div class="row">
            <div class="col-md-12">
                {/* Add User Info */}
                <div class="card mb-4 info-header">
                    <div class="card-header"><h2>Add Your Info</h2></div>
                    <div class="card-body">

                        {/* Entry Form */}
                        <form>
                            <div class="form-group">
                                <label for="assets-input">IRA/401k Assets [$]</label>
                                <input class="form-control" id="assets-input" type="number" min="0" />
                            </div>
                            <div class="form-group">
                                <label for="income-input">Average Annual Retirement Income [$]</label>
                                <input class="form-control" id="income-input" type="number" min="0" />
                            </div>
                            <div class="form-group">
                                <label for="retirement-age-input">Desired Retirement Age</label>
                                <input class="form-control" id="retirement-age-input" type="number" min="0" max="80" />
                            </div>
                            <div class="form-group">
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

                            <button class="btn btn-info float-right" id="info-btn">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputForm;



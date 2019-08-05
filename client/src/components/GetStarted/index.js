import React from "react";
import "./style.css";
import InputForm from '../InputForm';

class GetStarted extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
            hideStart: false
        };
    }

    onClick(e) {
        e.preventDefault();
        this.setState({
            showInfo: !this.showInfo,
            hideStart: !this.hideStart
        })
    }


    render() {
        const {hideStart} = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 solution">
                        <div className={`solution-header ${hideStart ? 'hide' : ''}`}> 
                            <h3>Global Retirement Solutions</h3>
                            <div className="panel-body">
                                <button onClick={ (e) => this.onClick(e) } className="btn btn-info" id="submit-btn" type="submit">Get Started</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="inputForm">
                            {  this.state.showInfo && <InputForm />  }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GetStarted;
import React from "react";
import "./style.css";
import InputForm from '../InputForm';

class GetStarted extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showInfo: false
            // showStart: true
        };
        this.showInfoForm = this.showInfoForm.bind(this);
    }
    showInfoForm = () => {
        const {showInfo} = this.state;
        this.setState( { showInfo: !showInfo } )
    }

    // showGetStarted = () => {
    //     const {showStart} = this.state;
    //     this.setState( { showStart: !showStart } )
    // }

    // class Test extends React.Component {
    //     onClick(event) {
    //         showInfoForm();
    //         showGetStarted();
    //     }
    //     render() {
    //         return (
    //            <button onClick={this.onClick}>GetStarted</button>
    //         );
    //      }
    // }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 solution">
                        <div className="solution-header"> 
                            <h3>Global Retirement Solutions</h3>
                            <div className="panel-body">
                                <button onClick={ this.showInfoForm } className="btn btn-info" id="submit-btn" type="submit">Get Started</button>
                                
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
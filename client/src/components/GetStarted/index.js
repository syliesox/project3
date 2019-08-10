import React from "react";
import "./style.css";
// import InputForm from '../InputForm';

export function GetStarted(props) {
    return (
      <div>
        <h3>Welcome to your Global Retirement Solutions!</h3>
        <p>Enter in your info, and pick a city to get started!</p>
        <p>Compare multiple cities in the table below.</p>
      </div>
    );
  }

// class GetStarted extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             showInfo: false,
//             hideStart: false
//         };
//     }

//     onClick(e) {
//         e.preventDefault();
//         this.setState({
//             showInfo: !this.showInfo,
//             hideStart: !this.hideStart
//         })
//     }


//     render() {
//         const {hideStart} = this.state;
//         return (
//             <div>
//                 <div className="row">
//                     <div className="col-md-3"></div>
//                     <div className="col-md-6 solution">
//                         <div className={`solution-header ${hideStart ? 'hide' : ''}`}> 
//                             <h3>Welcome to your Global Retirement Solutions!</h3>
//                             <p>Enter in your info, and pick a city to get started!</p>
//                             <p>Compare multiple cities in the table below. Click on a city to view information about that city.</p>
//                             <div className="panel-body">
//                                 <button onClick={ (e) => this.onClick(e) } className="btn btn-info" id="submit-btn" type="submit">Get Started</button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="inputForm">
//                             {  this.state.showInfo && <InputForm />  }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default GetStarted;
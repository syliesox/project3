import React from 'react';
// import DataTable from 'react-data-table-component';
import "./style.css";
// import DeleteBtn from '../DeleteBtn';
// import API from '../../utils/API';



// export function List({ children }) {
//   return (
//     <div className="list-overflow-container">
//       <ul className="list-group">{children}</ul>
//     </div>
//   );
// }

// export function ListItem({ children }) {
//   return <li className="list-group-item">{children}</li>;
// }



///////////////////////////////////////////////////////////////
// export function Table({ children }) {
//   return (
//     <table className="table">
//       <thead>
//           <tr>
//               <th scope="col" value="assets" className='col-xs-8' id="col1">Assets</th>
//               <th scope="col" value="income" className='col-xs-2' id="col2">Income In<br />Retirement</th>
//               <th scope="col" value="age" className='col-xs-1' id="col3">Retirement<br />Age</th>
//               <th scope="col" value="city" className='col-xs-2' id="col4">City</th>
//               <th scope="col" value="funds" className='col-xs-2' id="col5">Retirement<br />Fund</th>
//               <th scope="col" value="need" className='col-xs-2' id="col6">Need</th>
//               <th scope="col" value="delete" className='col-xs-2' id="col6">Delete</th>
//           </tr>
//       </thead>
//       <tbody>
//         {children}
//       </tbody>
//     </table>
//   );
// }

// export function TableRow({ children }) {
//   return (
//     <td className="tableRow">{children}</td>
//     <div>  
//       <td>assets</td>
//       <td>income</td>
//       <td>age</td>
//       <td>city</td>
//       <td>funds</td>
//       <td>need</td>
//     </div>
//   );
// }

// export default Table;
///////////////////////////////////////////////////////////////////
  
  // class Table extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       json: []
  //     }
  //   }
  
  //   componentDidMount() {
  //     this.setState((prevState) => {
  //       return {
  //           json: this.props.userData
  //       //   json: getJson()
  //       }
  //     })
  //   }
  
  //   render() {
  //     return (
  //       <div>
  //           <div className="card-header"><h2>Your Retirement Info</h2></div>
  //           <div className="card-body">
  //               <table className="table table-sm table-hover" id='scenario-table'>
  //                   <thead>
  //                       <tr>
  //                           <th scope="col" className='col-xs-8' id="col1">Assets</th>
  //                           <th scope="col" className='col-xs-2' id="col2">Income In<br />Retirement</th>
  //                           <th scope="col" className='col-xs-1' id="col3">Retirement<br />Age</th>
  //                           <th scope="col" className='col-xs-2' id="col4">City</th>
  //                           <th scope="col" className='col-xs-2' id="col5">Retirement<br />Fund</th>
  //                           <th scope="col" className='col-xs-2' id="col6">Need</th>
  //                           <th scope="col" className='col-xs-2' id="col6">Delete</th>
  //                       </tr>
  //                   </thead>
  //                   <tbody>
  //                     {this.state.json.length ? (
  //                       {this.state.json.map(scenario => (

  //                           return (
  //                             <tr key={scenario._id}>
  //                                 <td>{scenario.assets}</td>
  //                                 <td>{scenario.income}</td>
  //                                 <td>{scenario.age}</td>
  //                                 <Link>
  //                                 <td>{scenario.city}</td>
  //                                 </Link>
  //                                 <td>{scenario.funds}</td>
  //                                 <td>{scenario.needs}</td>
  //                                 <DeleteBtn />
  //                             </tr>
  //                           )

  //                       ))}
  //                     ) : (
  //                       <h3>No results to display yet!</h3>
  //                     )}
  //                   </tbody>
  //               </table>
  //           </div>
  //       </div>
  //     )
  //   }
  // }





// export function Table(props) {


//     return (
//         <div>
//             <div className="card-header"><h2>Your Retirement Info</h2></div>
//             <div className="card-body">
//                 <table className="table table-sm table-hover" id='scenario-table'>
//                     <thead>
//                         <tr>
//                             <th scope="col" className='col-xs-8' id="col1">Assets</th>
//                             <th scope="col" className='col-xs-2' id="col2">Income In<br />Retirement</th>
//                             <th scope="col" className='col-xs-1' id="col3">Retirement<br />Age</th>
//                             <th scope="col" className='col-xs-2' id="col4">City</th>
//                             <th scope="col" className='col-xs-2' id="col5">Retirement<br />Fund</th>
//                             <th scope="col" className='col-xs-2' id="col6">Need</th>
//                             <th scope="col" className='col-xs-2' id="col6">Delete</th>
                            
//                         </tr>
//                     </thead>
//                     <tbody>
                    
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }
// export function TableRow(props) {
//     return (
//         <tr>
//             <td>{this.props.userData.assets}</td>
//             <td>{this.props.userData.income}</td>
//             <td>{this.props.userData.age}</td>
//             <td>{this.props.userData.city}</td>
//             <td>{this.props.userData.funds}</td>
//             <td>{this.props.userData.need}</td>
//             <DeleteBtn />
//         </tr>
//     )
// }

// class Table extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             showInfoForm: false,
//             hideTable: false
//         };
//     }
    
//     onClick(e) {
//         e.preventDefault();
//         this.setState({
//             showInfoForm: !this.showInfoForm,
//             hideTable: !this.hideTable
//         })
        
//     }

//     render() {
//         const {hideTable} = this.state;
//         return (
//             // User Input and Database info being displayed
//             <div className="container user-info">
//                 <div className="row">
//                     <div className="col-md-12">
        
//                         {/* Current User Info */}
//                         <div className={`card mb-4 table-header ${hideTable ? 'hide' : ''}`}>
//                             <div className="card-header"><h2>Your Retirement Info</h2></div>
//                             <div className="card-body">
//                                 <table className="table table-sm table-hover" id='scenario-table'>
//                                     <thead>
//                                         <tr>
//                                             <th scope="col" className='col-xs-8' id="col1">Assets</th>
//                                             <th scope="col" className='col-xs-2' id="col2">Income In<br />Retirement</th>
//                                             <th scope="col" className='col-xs-1' id="col3">Retirement<br />Age</th>
//                                             <th scope="col" className='col-xs-2' id="col4">City</th>
//                                             <th scope="col" className='col-xs-2' id="col5">Retirement<br />Fund</th>
//                                             <th scope="col" className='col-xs-2' id="col6">Need</th>
//                                             {/* <th scope="col" class='col-xs-1'>Remove</th> */}
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                     </tbody>
//                                 </table>
//                                 <button onClick={ (e) => this.onClick(e) } className="btn btn-info float-right" id="info-btn">Add New City</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* <div className="row">
//                     <div className="col-md-12">
//                         <div className="inputForm">
//                             {  this.state.showInfoForm && <InputForm />  }
//                         </div>
//                     </div>
//                 </div> */}
//             </div>
//         )
//     }
    
// }

// export default Table;
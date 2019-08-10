import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import BackgroundMap from './components/BackgroundMap';
// import Nav from './components/Nav';
import MainPage from './pages/MainPage';
import City from './pages/City';
// import Table from './components/Table';

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        {/* <BackgroundMap> */}
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/mainpage" component={MainPage} />
            <Route exact path="/city/:id" component={City} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        {/* </BackgroundMap> */}
      </div>
    </Router>
  );
}


export default App;

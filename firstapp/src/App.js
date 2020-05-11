import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from './component/layout/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ToDoApp from "./component/pages/ToDoApp";
import Add from "./component/Operation/Add";
import Edit from "./component/Operation/Edit";
import View from "./component/Operation/View";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={ToDoApp} />
        <Route exact path='/Operation/Add' component={Add} />
        <Route exact path='/Operation/Edit/:id' component={Edit} />
        <Route exact path='/Operation/:id' component={View} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

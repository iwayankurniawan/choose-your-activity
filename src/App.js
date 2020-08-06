import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect, Link} from 'react-router-dom';
import {Nav, Navbar, NavItem, NavLink, NavbarBrand} from 'reactstrap';
import {useSelector } from 'react-redux';

import Home from "./Components/Home";
import Statistic from "./Components/Statistic"

function App() {
  const activity = useSelector(state => state.callApi);
  const toggle = useSelector(state => state.toogle);
  const listActivities = useSelector(state => state.addAction);
  console.log(listActivities);
  

  return (
    <div className="App">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Iambored</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
          <Link to="/home"><NavLink>Home</NavLink></Link>
          </NavItem>
          <NavItem>
            <Link to="/statistic"><NavLink >Statistic</NavLink></Link>
          </NavItem>
        </Nav>
      </Navbar>

      <Switch>
        <Route path="/home">
          <Home activity={activity} toggle={toggle} />
        </Route>
        <Route path="/statistic">
          <Statistic list={listActivities}/>
        </Route>
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;

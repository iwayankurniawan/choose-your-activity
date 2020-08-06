import React from 'react';
import {Jumbotron, Container, Button} from 'reactstrap';

import ModalPopUp from "./ModalPopUp";
import { fetchActivity, toogleActivate} from '../Redux/ActionCreators';
import { useDispatch } from 'react-redux';

const Home = (props) => {

  const dispatch = useDispatch();
  

  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">I am Bored</h1>
          <p className="lead">Some Ideas for you who don't what to do</p>
        </Container>
      </Jumbotron>
      <div>
        <Button color="primary" size="lg" className="centerText" onClick={()=>{dispatch(toogleActivate(props.toggle.toogleActivate)); dispatch(fetchActivity());}}>Generate Activity Idea</Button>
      </div>
      <ModalPopUp listActivity = {props.activity}/>
    </div>
  );
};

export default Home;

import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { toogleActivate,fetchActivity,addActivityForStatistic } from '../Redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux';

import {Loading} from './Loading';

const ModalPopUp = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const dispatch = useDispatch();
  const toggle = useSelector(state => state.toogle);

    let LinkExisted = () => { 
      if(props.listActivity.activity.link!==""){
        return (<p>Link to Learn: <a href={props.listActivity.activity.link}>{props.listActivity.activity.link}</a></p>);
      }else{
        return <div></div>
      }
    }


  if(props.listActivity.isLoading){
    return <Loading />
  }else if(props.listActivity.errMess){
    return <h4>{props.listActivity.errMess}</h4>
  }else{
    return (
      <div>
        <Modal isOpen={toggle.toogleActivate} className={className}>
          <ModalHeader toggle={()=>{dispatch(toogleActivate(toggle.toogleActivate));}}>{props.listActivity.activity.type + " Activity"}</ModalHeader>
          <ModalBody>
            {props.listActivity.activity.activity}
            <p>{"Participants: "+ props.listActivity.activity.participants}</p>
            <LinkExisted />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{dispatch(fetchActivity());dispatch(addActivityForStatistic(props.listActivity.activity));}}>I like that</Button>{' '}
            <Button color="secondary" onClick={()=>{dispatch(fetchActivity());}}>Other Idea</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

 
};

export default ModalPopUp;

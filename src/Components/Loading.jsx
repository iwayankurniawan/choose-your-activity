import React from 'react';
import {Spinner} from 'reactstrap';

export const Loading = () => {
  return (
    <div>
      <div className="col-12" style={{position:"fixed",top:"47%",zIndex:"1042"}}>
        <Spinner style={{ width: '3rem', height: '3rem' }} color="primary"/>
        <h5>Loading . . .</h5>
      </div>
      <div className="loader"> </div>
    </div>
  );
}

import React from 'react';
import {Row} from 'reactstrap';

const Statistic = (props) => {
    
    const listActivities = props.list.map(list => {
        return(
          <Row key={list.key}>
            <p>{list.key+ " " + list.activity + " " + list.type + " " + list.participants + list.price + list.accessibility}</p>
          </Row>
        );
      });

  return (
    <div style={{marginleft: "10px"}}>
      {listActivities}
    </div>
  );
}

export default Statistic;

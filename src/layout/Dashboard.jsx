import React from 'react';
//Custom Components
import NaviBar from './Navbar'
//Styles imports
import {Col, Row, Panel} from 'react-bootstrap'

const Dashboard = () => {
  return(
    <div className="container-fullwidth">
      <NaviBar />
      <div className="container">
        <Row>
          <h1>Bienvenue sur l'extranet Coeur Lumière</h1>
        </Row>
      </div>
    </div>
  )
};

export default Dashboard;

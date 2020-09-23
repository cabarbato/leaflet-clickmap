import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AppProgress = props => (
  <footer>
    <Container className="progress" fluid="md">
      <Row>
        <Col>
          <p className="progress-title">Progress</p>
        </Col>
        <Col>
          <div className="progress-bar"></div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default AppProgress;

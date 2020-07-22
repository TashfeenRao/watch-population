import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/nav.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Nav = () => (
  <Row className="nav-row ml-0 mr-0">
    <Col className="text-center">
      <Link to="/" className="text-decoration-none text-style text-white" data-toggle="tooltip" title="Home">
        Stock Reviewer
      </Link>
    </Col>
  </Row>
);
export default Nav;

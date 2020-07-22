import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import filterProducts from '../../actions/filterProducts';
import CardColumn from './cardColumn';
import '../../style/product.css';

class Products extends Component {
  constructor(props) {
    super(props);
    this.filterCurrencies = this.filterCurrencies.bind(this);
  }

  filterCurrencies(e) {
    const { dispatch } = this.props;
    dispatch(filterProducts(e.target.value));
  }

  render() {
    return (
      <Container>
        <Form.Group className="mt-2">
          <Form.Row>
            <Button variant="info" size="md" disabled className="search-button">
              Filter By
            </Button>
            <Col className="pl-0 pr-0">
              <Form.Control size="lg" type="text" placeholder="Company Name" onChange={e => this.filterCurrencies(e)} />
            </Col>
          </Form.Row>
        </Form.Group>
        <Row>
          <Col className="currencyContainer">
            <CardColumn />
          </Col>
        </Row>
      </Container>
    );
  }
}
Products.defaultProps = {
  dispatch: () => undefined,
};
Products.propTypes = {
  dispatch: PropTypes.func,
};
export default connect()(Products);

/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import filterProducts from '../actions/filterProducts';
import '../style/product.css';

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
    const {
      products, filters,
    } = this.props;
    const prodArray = Object.entries(products);
    const filteredProducts = () => ((filters !== '') ? prodArray.filter(prod => prod[0].includes(filters.toUpperCase())) : prodArray);
    // const filteredProducts = () => ((filters !== '') ? products.filter(prod => prod.name.toLowerCase().includes(filters.toLowerCase())) : products);
    return (
      <Container>
        <Form.Group className="mt-2">
          <Form.Row>
            <Button variant="info" size="md" disabled>
              Filter By
            </Button>
            <Col>
              <Form.Control size="lg" type="text" placeholder="Company Name" onChange={e => this.filterCurrencies(e)} />
            </Col>
          </Form.Row>
        </Form.Group>
        <Row>
          <Col className="currencyContainer">
            <CardColumns>
              {filteredProducts().map((item, index) => (
                <Link to={`/item/${index}`} key={index}>
                  <Card bg="primary" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                      <p>
                        {item[0]}
                      </p>
                      <footer className="blockquote-footer">
                        <small className="text-muted">
                          Someone famous in
                          {' '}
                          <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </Card>
                </Link>
              ))}
              {' '}
              {(filteredProducts().length === 0) && (<h1>Nothing found</h1>)}
            </CardColumns>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default connect(state => ({
  products: state.products,
  filters: state.input,
}))(Products);

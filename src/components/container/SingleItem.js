import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';
import fetchProducts from '../../actions/fetchProducts';
import Spinner from '../presentational/spinner';

const SingleItem = props => {
  const { id } = useParams();
  const { dispatch } = props;
  dispatch(fetchProducts());
  const products = useSelector(state => state.products);
  const loading = useSelector(state => state.loading);
  if (loading === true) return <Spinner />;
  return (
    <Container className="text-white text-center">
      <Row>
        <Col className="d-flex align-items-center">
          <Image src={products[id].image} roundedCircle />
          <div>
            {' '}
            <h2>{products[id].companyName}</h2>
            <h4>
              {' '}
              CEO:
              {' '}
              {products[id].ceo}
            </h4>
            Website:
            {' '}
            <p>{[id].website}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Description</h3>
          <p>
            {' '}
            {products[id].description}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardColumns>
            <Card text="white" className="text-center p-3 companyBox company-detail">
              <Card.Body>
                <Card.Title>
                  symbol:
                  {' '}
                  {products[id].symbol}
                </Card.Title>
                <Card.Text>
                  <p>
                    exchange:
                    {' '}
                    {products[id].exchange}
                  </p>
                  <p>
                    exchangeShortName:
                    {' '}
                    {products[id].exchangeShortName}
                  </p>
                  <p>
                    industry:
                    {' '}
                    {products[id].industry}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card text="white" className="text-center p-3 companyBox company-detail">
              <Card.Body>
                <Card.Title>
                  price:
                  {' '}
                  {products[id].price}
                </Card.Title>
                <Card.Text>
                  <p>
                    beta:
                    {' '}
                    {products[id].beta}
                  </p>
                  <p>
                    lastDiv:
                    {' '}
                    {products[id].lastDiv}
                  </p>
                  <p>
                    changes:
                    {' '}
                    {products[id].changes}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card text="white" className="text-center p-3 companyBox company-detail">
              <Card.Body>
                <Card.Title>
                  country:
                  {' '}
                  {products[id].country}
                </Card.Title>
                <Card.Text>
                  <p>
                    address:
                    {' '}
                    {products[id].address}
                  </p>
                  <p>
                    state:
                    {' '}
                    {products[id].state}
                  </p>
                  <p>
                    phone:
                    {' '}
                    {products[id].phone}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        </Col>
      </Row>
    </Container>
  );
};

SingleItem.defaultProps = {
  dispatch: () => undefined,
};
SingleItem.propTypes = {
  dispatch: PropTypes.func,
};
export default connect()(SingleItem);

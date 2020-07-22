import React from 'react';
import { useSelector, connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';
import fetchProducts from '../actions/fetchProducts';
import Spinner from './presentational/spinner';

const SingleItem = props => {
  const { id } = useParams();
  const { dispatch } = props;
  dispatch(fetchProducts());
  const products = useSelector(state => state.products);
  const loading = useSelector(state => state.loading);
  const prodArray = Object.entries(products);
  //        {products[id].name}
  if (loading === true) return <Spinner />;
  return (
    <Container className="text-white text-center">
      <Row>
        <Col className="d-flex align-items-center">
          <Image src={require('../images/USD.svg')} roundedCircle />
          <div>
            <h2>Google</h2>
            <h4>CEO</h4>
            <a href="#" target="_blank">http://investor.fb.com</a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Description</h3>
          <p>
            Apple Inc. designs, manufactures, and markets smartphones,
            personal computers, tablets, wearables, and accessories worldwide.
            It also sells various related services. The company offers iPhone, a line of
            smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets;
            and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch,
            Beats products, HomePod, iPod touch, and other Apple-branded and third-party
            accessories.
            It also provides digital content stores and streaming services; AppleCare support
            services;
            and iCloud, a cloud service, which stores music, photos, contacts, calendars, mail,
            documents,
            and others. In addition, the company offers various service, such as Apple Arcade,
            a game subscription service; Apple Card, a co-branded credit card; Apple News+,
            a subscription news and magazine service; and Apple Pay, a cashless payment service,
            as well as licenses its intellectual property, and provides other related services.
            The company serves co,
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardColumns>
            <Card text="white" className="text-center p-3 companyBox company-detail">
              <Card.Body>
                <Card.Title>symbol: AAPL</Card.Title>
                <Card.Text>
                  <p>exchange: Nasdaq Global Select</p>
                  <p>exchangeShortName: NASDAQ</p>
                  <p>industry: Internet Content & Information</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card text="white" className="text-center p-3 companyBox company-detail">
              <Card.Body>
                <Card.Title>price: 389.21</Card.Title>
                <Card.Text>
                  <p>beta: 1.228499</p>
                  <p>lastDiv: 3.13</p>
                  <p>changes: 1.21</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card text="white" className="text-center p-3 companyBox company-detail">
              <Card.Body>
                <Card.Title>country: United States</Card.Title>
                <Card.Text>
                  <p>address: One Apple Park Way</p>
                  <p>state: CA</p>
                  <p>phone: 408-996-1010</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        </Col>
      </Row>
    </Container>
  );
};
export default connect()(SingleItem);

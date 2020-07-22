import React from 'react';
import { useSelector, connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';
import fetchProducts from '../actions/fetchProducts';

const SingleItem = props => {
  const { id } = useParams();
  const { dispatch } = props;
  dispatch(fetchProducts());
  const products = useSelector(state => state.products);
  const loading = useSelector(state => state.loading);
  const prodArray = Object.entries(products);
  //        {products[id].name}
  if (loading === true) return <h1>loading</h1>;
  return (
    <Container className="text-white text-center">
      <Row>
        <Col xs={6} md={4} className="d-flex">
          <Image src={require('../images/USD.svg')} roundedCircle />
          <h2>Google</h2>
        </Col>
      </Row>
      <Row>
        <Col>
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
        </Col>
      </Row>
    </Container>
  );
};
export default connect()(SingleItem);

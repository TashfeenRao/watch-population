import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

import fetchCountry from '../../actions/fetchCountry';
import Spinner from '../presentational/spinner';

class SingleItem extends Component {
  componentDidMount() {
    const { name } = this.useParams();
    const { dispatch } = this.props;
    dispatch(fetchCountry(name));
  }

  render() {
    const { country, loading } = this.props;
    if (loading === true) return <Spinner />;
    return (
      <Container className="text-white text-center">
        <CardColumns>
          {country.map(item => (
            <Link to={`/${item.iso3}`} key={item.id}>
              <Card text="white" className="text-center p-3 companyBox">
                <blockquote className="blockquote mb-0 card-body">
                  <p>{`Country: ${item.iso3}`}</p>
                  <p>{`Descp: ${item.title}`}</p>
                  <p>{`Year: ${item.popyear}`}</p>
                </blockquote>
              </Card>
            </Link>
          ))}
        </CardColumns>
      </Container>
    );
  }
}

SingleItem.defaultProps = {
  dispatch: () => undefined,
};
SingleItem.propTypes = {
  dispatch: PropTypes.func,
};
export default connect( state => ({
  country: state.country,
  loading: state.loading,
}),
)(SingleItem);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import fetchCountry from '../../actions/fetchCountry';
import Spinner from '../presentational/spinner';

class SingleItem extends Component {
  componentDidMount() {
    const { name } = this.props;
    const { dispatch } = this.props;
    console.log(name);
    dispatch(fetchCountry(name));
  }

  render() {
    const { country, loading } = this.props;
    if (loading === true) return <Spinner />;
    return (
      <CardColumns>
        {country.map(item => (
          <Link to={`/year/${item.popyear}/${item.iso3}`} key={item.id}>
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
    );
  }
}

SingleItem.defaultProps = {
  dispatch: () => undefined,
};
SingleItem.propTypes = {
  dispatch: PropTypes.func,
};
export default connect(state => ({
  country: state.country,
  loading: state.loading,
}))(SingleItem);

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
    dispatch(fetchCountry(name));
  }

  render() {
    const { country, pending } = this.props;
    console.log(pending)
    if (pending === true) return <Spinner />;
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
  country: [],
  pending: false,
  name: '',
};
SingleItem.propTypes = {
  dispatch: PropTypes.func,
  country: PropTypes.arrayOf(
    PropTypes.shape({
      iso3: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  pending: PropTypes.bool,
  name: PropTypes.string,
};
export default connect(state => ({
  country: state.country,
  pending: state.loading,
}))(SingleItem);

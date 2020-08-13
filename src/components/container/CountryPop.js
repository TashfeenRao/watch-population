import React from 'react';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const CountryPop = props => {
  const { year } = useParams();
  const { country } = props;
  const countryYearPop = country.filter(item => item.popyear === year);
  countryYearPop.map(i => console.log(i.id));
  return (
    <div>
      {countryYearPop.map(p => (
        <Card key={p.id}>
          <Card.Body>
            <Card.Title>
              <h1>{p.country}</h1>
            </Card.Title>
            <Card.Text>
              Title:
              {p.title}
            </Card.Text>
            <Card.Text>
              Descrption:
              {p.desc}
            </Card.Text>
            <Card.Text>
              Year:
              {p.popyear}
            </Card.Text>
            <Card.Text>
              DOI:
              {p.doi}
            </Card.Text>
            <Card.Img src={`${p.url_img}`} />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default connect(state => ({
  country: state.country,
}))(CountryPop);

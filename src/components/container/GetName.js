import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import SingleItem from './SingleItem';

const GetName = () => {
  const { name } = useParams();
  return (
    <Container className="text-white text-center">
      <SingleItem name={name} />
    </Container>
  );
};

export default GetName;

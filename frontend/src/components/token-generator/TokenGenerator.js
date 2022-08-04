import React, { useState } from 'react';
import { Container, Label } from 'reactstrap';

const TokenGenerator = () => {
  const [randomToken, setRandomToken] = useState('random');
  setRandomToken('dsdsdsd');
  const rand = () => Math.random().toString(36).substr(2);

  const token = () => rand() + rand();
  return (
    <>
      <Container>
        <Label>Token Generator {randomToken}</Label>
      </Container>
    </>
  );
};

export default TokenGenerator;
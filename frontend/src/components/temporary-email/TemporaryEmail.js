import React from 'react';
import {Container, Label} from 'reactstrap';

const TemporaryEmail = () => (
  <>
    <Container className='text-center'>
      <h1>Temporary Email </h1>
      <br />
      <br />
      <Label>This feature is still under development.
        <br />
        Click on this URL <a href="https://tempmail.email/"> Temporary Email</a> to use temporary email generator. </Label>
    </Container >
  </>
);

export default TemporaryEmail;

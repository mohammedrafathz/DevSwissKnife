/* eslint-disable no-unused-vars */
import React, {useCallback, useState} from 'react';
import {Button, Container, Label} from 'reactstrap';

const TemporaryEmail = () => {
  const [email, setemail] = useState('');

  return (
    <>
      <Container>
        <h1 className='text-center'>TEMPORARY EMAIL {email}</h1>
        <Label style={{marginLeft:'15%', marginTop:'5%'}}>This feature is still under development. </Label>
        <Label> Please visit this site for the same <a href="https://tempmail.email/"> TemporaryEmail</a>.</Label>
        <img src='./images/R.png' width='1000'></img>
      </Container>
    </>
  );
}
  ;

export default TemporaryEmail;

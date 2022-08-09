import React, { useState } from 'react';
import { Container, Label, Button } from 'reactstrap';
import classes from './TokenGenerator.module.css';

const TokenGenerator = () => {

  const [token, setToken] = useState('Your Token Goes Here');
  const [copySuccess, setCopySuccess] = useState(false);
  const initTokenGeneration = (() => {

    const rand = () => Math.random().toString(36).substring(2);
    setCopySuccess(false);
    setToken(rand() + rand() + rand() + rand());
    console.log('token', token);

  });

  const copyToClipboard = (() => {
    const tempInput = document.createElement('input');
    tempInput.value = token;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopySuccess(true);
  });

  return (
    <>
      <Container style={{ width: '100%', marginLeft: '20%' }}>
        <Label style={{ marginLeft: '20%', fontWeight: 'bold' }}>TOKEN GENERATOR</Label><br /><br />
        <input value={token} onChange={token} style={{
          width: '50%', height: 100, borderColor: '#8497b8', borderRadius: 5
          , borderWidth: 1
        }}></input><br />
        <br />
        <Button onClick={initTokenGeneration} style={{ backgroundColor: 'green', marginLeft: '15%' }}>Generate</Button>
        <Button onClick={copyToClipboard} style={{ marginLeft: '5%', backgroundColor: 'blue' }}>Copy</Button>
        <p className="ml-2 text-base-secondary text-sm light">
          {copySuccess ? <span className={classes.blink}>Copied to Clipboard!</span> : ''}
        </p>
      </Container>
    </>
  );
};

export default TokenGenerator;
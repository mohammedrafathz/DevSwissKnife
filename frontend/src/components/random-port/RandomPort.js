/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import { Button, Container, Label } from 'reactstrap';
import style from './RandomPort.module.css';


const RandomPort = () => {
  const [rPort, setRPort] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const generatePortNumber = (() => {
    const port = Math.floor(Math.random() * 65535 + 1024);
    setCopySuccess(false);
    setRPort(port);
  });

  const copyToClipboard = (() => {
    const tempInput = document.createElement('input');
    tempInput.value = rPort;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopySuccess(true);
  });

  return (
    <>
      <Container>
        <Label>Random Port</Label><br /><br />
        <Label>Generate random port numbers outside of the range of known ports (0-1023) i.e., 1024-49151 (registered ports)
                    49152-65535 (private ports).</Label>
        <Container class={style.box}>
          <Label class={style.text}>{rPort}</Label><br/><br/>
          <Button onClick={generatePortNumber} class={style.button}>Geneate Port Number</Button>
          <Button onClick={copyToClipboard} class={style.copy}>Copy</Button>
          <p className="ml-2 text-base-secondary text-sm light">
            {copySuccess ? <span className={style.blink}>Copied to Clipboard!</span> : ''}
          </p>
        </Container>
      </Container>
    </>
  );
};

export default RandomPort;

import React, {useEffect, useState} from 'react';
import {Button, Card, CardBody, Col, Row} from 'reactstrap';
import {copyToClipboard} from '../../utils/commonFunction';
import style from './RandomPort.module.css';


const RandomPort = () => {
  const [rPort, setRPort] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const generatePortNumber = () => {
    const port = Math.floor(Math.random() * 65535 + 1024);
    setCopySuccess(false);
    setRPort(port);
  };

  useEffect(() => {
    generatePortNumber();
  }, []);

  return (
    <>
      <div className='text-center'>
        <h1>Random Port</h1>
        <small>Generate random port numbers outside of the range of known ports (0-1023)
          <br /> i.e., 1024-49151 (registered ports)
          49152-65535 (private ports).</small>
      </div>
      <br />
      <Row >
        <Col sm={8} className='m-0-auto'>
          <Card>
            <CardBody className='text-center'>
              <h1>{rPort}</h1>
              <br />
              <Button onClick={generatePortNumber} class={style.button} style={{backgroundColor: 'green'}}>Generate</Button>
              <Button onClick={() => copyToClipboard(rPort)} className={style.copy + ' ml-2'} style={{backgroundColor:'blue'}}>Copy</Button>
              <p className="ml-2 text-base-secondary text-sm light">
                {copySuccess ? <span className={style.blink}>Copied to Clipboard!</span> : ''}
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default RandomPort;

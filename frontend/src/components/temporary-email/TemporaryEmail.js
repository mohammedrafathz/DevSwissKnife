import React, { useState } from 'react';
import { Row, Card, Col, CardBody, Button } from 'reactstrap';
import {Clipboard, Gear} from 'react-bootstrap-icons';
import {copyToClipboard} from '../../utils/commonFunction';
import style from '../random-port/RandomPort.module.css';

const TemporaryEmail = () => {
  const [email, setEmail] = useState('');
  const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  var string = '';
  var string2 = '';

  const generateEmail = () => {
    for (var ii = 0; ii < 10; ii++) {
      string += chars[Math.floor(Math.random() * chars.length)];
    }
    for (var jj = 0; jj < 4; jj++) {
      string2 += chars[Math.floor(Math.random() * chars.length)];
    }
    console.log('string', string);
    string = string + '@' + string2 + '.com';
    setEmail(string);
  };

  return (
    <>

      <div className='text-center'>
        <h1>TEMPORARY EMAIL</h1>
        <small>Generates temporary email</small>
      </div>
      <br />
      <Row >
        <Col sm={8} className='m-0-auto'>
          <Card>
            <CardBody className='text-center'>
              <input value={email}></input><br/><br/>
              <Button color='success' outline onClick={generateEmail} class={style.button}>
                <Gear size={24} />
                {' '} Generate Email
              </Button>
              <Button color='primary' outline onClick={() => copyToClipboard(email)}>
                <Clipboard size={24} />
                {' '} Copy to Clipboard
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TemporaryEmail;

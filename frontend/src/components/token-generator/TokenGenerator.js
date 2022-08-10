import React, {useEffect, useState} from 'react';
import {Clipboard, Gear} from 'react-bootstrap-icons';
import {Button, Row, Col, Card, CardBody, Input} from 'reactstrap';
import {copyToClipboard} from '../../utils/commonFunction';

const TokenGenerator = () => {
  const [token, setToken] = useState('');

  const generateToken = () => {
    const rand = () => Math.random().toString(36).substring(2);
    setToken(rand() + rand() + rand() + rand());
  };

  useEffect(() => {
    generateToken();
  }, []);

  return (
    <>
      <div className='text-center'>
        <h1>Token Generator</h1>
        <small>Generates random token strings</small>
      </div>
      <br />
      <Row >
        <Col sm={8} className='m-0-auto'>
          <Card>
            <CardBody className='text-center'>
              <Input
                bsSize='lg'
                placeholder='Enter text you want to hash...'
                value={token}
              />
              <br />
              <Button onClick={generateToken} className='me-2' outline>
                <Gear size={24} />
                {' '} Generate
              </Button>
              <Button color='primary' outline onClick={() => copyToClipboard(token)}>
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

export default TokenGenerator;
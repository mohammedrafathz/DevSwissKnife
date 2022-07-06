import React, {useState} from 'react';
import {
  Button,
  Card,
  CardBody,
  Col, FormGroup, Input, Label, Row
} from 'reactstrap';

const URLEncodeDecode = () => {
  const [encoder, setEncoder] = useState('');
  const [decoder, setDecoder] = useState('');

  const handleEncoding = ({target}) => {
    setEncoder(target.value);
  };

  const handleDecoding = ({target}) => {
    setDecoder(target.value);
  };

  return (
    <>
      <div className='text-center'>
        <h1>
          String Encoder/Decoder
        </h1>
        <small className='text-muted'>Encode or Decode URL Formatted Strings</small>
      </div>
      <br />
      <Row>
        <Col sm='6'>
          <Card>
            <CardBody>
              <h3>Encoder</h3>
              <FormGroup>
                <Label>String to Encode:</Label>
                <Input
                  type='textarea'
                  rows={3}
                  value={encoder}
                  onChange={handleEncoding} />
              </FormGroup>
              <FormGroup>
                <Label>Encoded string:</Label>
                <Input
                  type='textarea'
                  rows={3}
                  value={encoder}
                  onChange={handleEncoding} />
              </FormGroup>
              <div className='text-center'>
                <Button>
                  Copy to Clipboard
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm='6'>
          <Card>
            <CardBody>
              <h3>Decoder</h3>
              <FormGroup>
                <Label>String to Decode:</Label>
                <Input
                  type='textarea'
                  rows={3}
                  value={decoder}
                  onChange={handleDecoding} />
              </FormGroup>
              <FormGroup>
                <Label>Encoded string:</Label>
                <Input
                  type='textarea'
                  rows={3}
                  value={encoder}
                  onChange={handleEncoding} />
              </FormGroup>
              <div className='text-center'>
                <Button>
                  Copy to Clipboard
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default URLEncodeDecode;
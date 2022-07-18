import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {notify} from 'react-notify-bootstrap';
import {
  Button, Card, CardBody,
  Col, FormGroup, Input, Label, Row
} from 'reactstrap';

const URLEncodeDecode = ({themeMode}) => {
  const [encoder, setEncoder] = useState('');
  const [encoded, setEncoded] = useState('');
  const [decoder, setDecoder] = useState('');
  const [decoded, setDecoded] = useState('');

  const handleEncoding = ({target}) => {
    setEncoder(target.value);
    const encoded = encodeURIComponent(target.value);

    setEncoded(encoded);
  };

  const handleDecoding = ({target}) => {
    setDecoder(target.value);
    const decoded = decodeURIComponent(target.value);
    setDecoded(decoded);
  };

  const copyEncoded = () => {
    if (encoded) {
      navigator.clipboard.writeText(encoded).then(() => {
        notify({text: 'Copied!', variant: 'dark'});
      });
    }
  };

  const copyDecoded = () => {
    if (decoded) {
      navigator.clipboard.writeText(decoded).then(() => {
        notify({text: 'Copied!', variant: 'dark'});
      });
    }
  };

  return (
    <>
      <div className='text-center'>
        <h1>
          String Encoder/Decoder
        </h1>
        <small className={`${themeMode ? 'text-light' : 'text-muted'}`}>Encode or Decode URL Formatted Strings</small>
      </div>
      <br />
      <Row>
        <Col sm='6'>
          <Card className='shadow' color={`${themeMode ? ' dark-card' : 'white'}`}>
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
                  value={encoded} />
              </FormGroup>
              <div className='text-center'>
                <Button onClick={copyEncoded}>
                  Copy to Clipboard
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col sm='6'>
          <Card className='shadow' color={`${themeMode ? ' dark-card' : 'white'}`}>
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
                <Label>Decoded string:</Label>
                <Input
                  type='textarea'
                  rows={3}
                  value={decoded}
                  onChange={handleEncoding} />
              </FormGroup>
              <div className='text-center'>
                <Button onClick={copyDecoded}>
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


URLEncodeDecode.propTypes = {
  themeMode: PropTypes.bool,
};
export default URLEncodeDecode;
import React, {useEffect, useState} from 'react';
import {
  Button, Card, CardBody,
  Col, Input, Row
} from 'reactstrap';
import {
  MD5 as md5Func, SHA1 as sha1Func,
  SHA224 as sha224Func, SHA256 as sha256Func,
  SHA512 as sha512Func, SHA384 as sha384Func,
  SHA3 as sha3Func, RIPEMD160 as rip160Func
} from 'crypto-js';
import {Clipboard} from 'react-bootstrap-icons';
import {copyToClipboard} from '../../utils/commonFunction';

const HashGenerator = () => {
  const [text, setText] = useState('Hello World');
  // const [digest, setDigest] = useState('HexaDecimal');
  const [md5, setMd5] = useState('');
  const [sha1, setSha1] = useState('');
  const [sha256, setSha256] = useState('');
  const [sha512, setSha512] = useState('');
  const [sha224, setSha224] = useState('');
  const [sha3, setSha3] = useState('');
  const [sha384, setSha384] = useState('');
  const [rip160, setRip160] = useState('');

  const onTextChange = ({target}) => {
    setText(target.value);
    setMd5(md5Func(target.value));
    setSha1(sha1Func(target.value));
    setSha256(sha256Func(target.value));
    setSha512(sha512Func(target.value));
    setSha224(sha224Func(target.value));
    setSha3(sha3Func(target.value));
    setSha384(sha384Func(target.value));
    setRip160(rip160Func(target.value));
  };

  useEffect(() => {
    setMd5(md5Func(text));
    setSha1(sha1Func(text));
    setSha256(sha256Func(text));
    setSha512(sha512Func(text));
    setSha224(sha224Func(text));
    setSha3(sha3Func(text));
    setSha384(sha384Func(text));
    setRip160(rip160Func(text));
  }, [text]);


  return (
    <>
      <div className='text-center'>
        <h1>Hash Generator</h1>
        <small>Generate hash strings for given text</small>
      </div>
      <br />
      <Row >
        <Col sm={8} className='m-0-auto'>
          <Card>
            <CardBody>
              <Input
                type='textarea'
                rows={4}
                bsSize='lg'
                placeholder='Enter text you want to hash...'
                value={text}
                onChange={onTextChange}
              />
              {/* <br />
              <InputGroup className='mb-3'>
                <InputGroupText>Digest: </InputGroupText >
                <select className='form-control' value={digest} onChange={({target}) => setDigest(target.value)}>
                  <option>Binary </option>
                  <option>HexaDecimal </option>
                  <option>Base 64</option>
                  <option>Base 64 URL</option>
                </select>
              </InputGroup> */}
              <br />
              <Row className='mb-2'>
                <Col sm="2" className='text-start'>MD5 :</Col>
                <Col sm="9"><Input readOnly value={md5} /></Col>
                <Col sm='1'>
                  <Button color='light' onClick={() => copyToClipboard(md5)}>
                    <Clipboard />
                  </Button>
                </Col>
              </Row>
              <Row className='mb-2'>
                <Col sm="2" className='text-start'>SHA1 :</Col>
                <Col sm="9"><Input readOnly value={sha1} /></Col>
                <Col sm='1'>
                  <Button color='light' onClick={() => copyToClipboard(sha1)}>
                    <Clipboard />
                  </Button>
                </Col>
              </Row>
              <Row className='mb-2'>
                <Col sm="2" className='text-start'>SHA256 :</Col>
                <Col sm="9"><Input readOnly value={sha256} /></Col>
                <Col sm='1'>
                  <Button color='light' onClick={() => copyToClipboard(sha256)}>
                    <Clipboard />
                  </Button>
                </Col>
              </Row>
              <Row className='mb-2'>
                <Col sm="2" className='text-start'>SHA512 :</Col>
                <Col sm="9"><Input readOnly value={sha512} /></Col>
                <Col sm='1'>
                  <Button color='light' onClick={() => copyToClipboard(sha512)}>
                    <Clipboard />
                  </Button>
                </Col>
              </Row>
              <Row className='mb-2'>
                <Col sm="2" className='text-start'>SHA224 :</Col>
                <Col sm="9"><Input readOnly value={sha224} /></Col>
                <Col sm='1'>
                  <Button color='light' onClick={() => copyToClipboard(sha224)}>
                    <Clipboard />
                  </Button>
                </Col>
              </Row>
              <Row className='mb-2'>
                <Col sm="2" className='text-start'>SHA384 :</Col>
                <Col sm="9"><Input readOnly value={sha384} /></Col>
                <Col sm='1'>
                  <Button color='light' onClick={() => copyToClipboard(sha384)}>
                    <Clipboard />
                  </Button>
                </Col>
              </Row>
              <Row className='mb-2'>
                <Col sm="2" className='text-start'>SHA3 :</Col>
                <Col sm="9"><Input readOnly value={sha3} /></Col>
                <Col sm='1'>
                  <Button color='light' onClick={() => copyToClipboard(sha3)}>
                    <Clipboard />
                  </Button>
                </Col>
              </Row>
              <Row className='mb-2'>
                <Col sm="2" className='text-start'>RIPEMD160 :</Col>
                <Col sm="9"><Input readOnly value={rip160} /></Col>
                <Col sm='1'>
                  <Button color='light' onClick={() => copyToClipboard(rip160)}>
                    <Clipboard />
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default HashGenerator;
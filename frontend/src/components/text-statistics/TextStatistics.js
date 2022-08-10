
import React, {useState} from 'react';
import {Button, Card, CardBody, Col, Input, Row} from 'reactstrap';

const TextStatistics = () => {

  const handleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handelLoClick = () => {
    let newtext = text.toLowerCase();

    setText(newtext);

  };

  const handleOnchange = event => {
    setText(event.target.value);

  };


  const [text, setText] = useState('');

  return (
    <>
      <div className='text-center'>
        <h1>Text Statistics</h1>
        <small>Counts characters, words and lines in a text... </small>
      </div>
      <br />
      <Row >
        <Col sm={8} className='m-0-auto'>
          <Card>
            <CardBody>
              <Input
                type='textarea'
                rows={8}
                bsSize='lg'
                placeholder='Enter your text here...'
                value={text}
                onChange={handleOnchange}
              />
              <br />
              <Button className='mr-2' onClick={handelLoClick}>Convert To Uppercase</Button>
              <Button onClick={handleupClick}>Convert To Lowercase</Button>
              <br />
              <br />
              <h4>Text Summary details</h4>
              <Row>
                <Col sm={3}>Word count: <span className='text-muted fs-4'>{text.trim() === '' ? 0 : text.split(' ').length}</span> </Col>
                <Col sm={3}>Character count: <span className='text-muted fs-4'>{text.replace(/ /g, '').length}</span></Col>
                <Col sm={3}>Byte size: <span className='text-muted fs-4'>{new TextEncoder().encode(text).length}</span> Bytes</Col>
                <Col sm={3}>Line count: <span className='text-muted fs-4'>{text.split('\n').length}</span></Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default TextStatistics;
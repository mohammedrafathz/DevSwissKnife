import React, {useState} from 'react';
import {
  Button, Col, FormGroup,
  Input, Row
} from 'reactstrap';

const CompareJson = () => {
  const [inputData1, setInputData1] = useState('');
  const [inputData2, setInputData2] = useState('');

  const handleInputData1 = ({target}) => {
    setInputData1(target.value);
  };

  const handleInputData2 = ({target}) => {
    setInputData2(target.value);
  };

  const compareInputs = () => {
    const parsedObj1 = JSON.parse(inputData1);
    // const parsedObj2 = JSON.parse(inputData2);


    for (const key in parsedObj1) {
      if (Object.hasOwnProperty.call(parsedObj1, key)) {
        const element = parsedObj1[key];
        console.log(element);
      }
    }
  };


  return (
    <>
      <div className='text-center'>
        <h1>
          JSON Comparison Tool
        </h1>
        <small className='text-muted'>Validate, format, compare two JSON documents</small>
      </div>
      <br />
      <Row>
        <Col sm='5'>
          <FormGroup>
            <Input
              type='textarea'
              rows={20}
              value={inputData1}
              onChange={handleInputData1}
              placeholder="Paste your JSON here to compare" />
          </FormGroup>
          or import from file <Input type='file'></Input>
        </Col>
        <Col sm='2' className='text-center'>
          <Button color='link'>Try Sample Data</Button>
        </Col>
        <Col sm='5'>
          <FormGroup>
            <Input
              type='textarea'
              rows={20}
              value={inputData2}
              onChange={handleInputData2}
              placeholder="Paste your JSON here to compare with" />
          </FormGroup>
          or import from file <Input type='file'></Input>
        </Col>
      </Row>
      <br />
      <Row className='text-center'>
        <Col sm='12'>
          <Button onClick={compareInputs}>Compare</Button>
        </Col>
      </Row>
    </>
  );
};

export default CompareJson;
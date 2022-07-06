import React, {useState} from 'react';
import {
  Col, FormGroup, Input, Row
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
        <Col sm='2'></Col>
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
    </>
  );
};

export default CompareJson;
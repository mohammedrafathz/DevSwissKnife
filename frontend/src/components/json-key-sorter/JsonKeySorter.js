import React from 'react';
import {Button, Col, Container, FormGroup, Input, Label, Row} from 'reactstrap';

const JsonKeySorter = () => {
  console.log();
  //TODO auto detect json from clipboard and show as placeholder
  return (
    <>
      <Container>
        <h1 className='text-center'>JSON Key Sorter</h1>
        <br />
        <br />
        <br />
        <Row >
          <Col className="align-self-center">
            <FormGroup>
              <Label>Paste your JSON here</Label>
              <Input type='textarea' rows={5} />
            </FormGroup>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row >
          <Col className="align-self-center">
            <FormGroup>
              <Label>Sorted JSON</Label>
              <Input type='textarea' rows={5} />
            </FormGroup>
          </Col>
        </Row>
        <div className='text-center'>
          <Button>
            Copy to Clipboard
          </Button>
          <Button className='ms-2' color='danger' outline>
            Clear
          </Button>
        </div>
      </Container>
    </>
  );
};

export default JsonKeySorter;

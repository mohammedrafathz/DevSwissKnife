import React, {useState} from 'react';
import {Button, Col, Container, FormGroup, Input, Label, Row} from 'reactstrap';

const JsonKeySorter = () => {
  const [inputData, setInputData] = useState('');
  const [sortedData, setSortedData] = useState('');
  //TODO auto detect json from clipboard and show as placeholder

  const handleInputData = ({target}) => {
    try {
      setInputData(target.value);
      const sorted = {};
      const jsonData = Object.fromEntries(
        target.value
          .replace('{', '')
          .replace('}', '')
          .split(',')
          .map(i => i.split(':'))
          .map(i => [i[0].trim(), i[1].trim()])
      );

      for (let a of Object.keys(jsonData).sort()) {
        sorted[a] = jsonData[a];
      }

      setSortedData(JSON.stringify(sorted, null, '\t').replaceAll('\\"',''));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <h1 className='text-center'>JSON Key Sorter</h1>
        <br />
        <Row >
          <Col className="align-self-center">
            <FormGroup>
              <Label>Paste your JSON here</Label>
              <Input
                type='textarea'
                rows={10}
                value={inputData}
                onChange={handleInputData} />
            </FormGroup>
          </Col>
        </Row>
        <br />
        <Row >
          <Col className="align-self-center">
            <FormGroup>
              <Label>Sorted JSON</Label>
              <Input
                type='textarea'
                rows={10}
                readOnly
                value={sortedData}
              />
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

import React, {useState} from 'react';
import {Button, Col, FormGroup, Input, Label, Row, UncontrolledAlert} from 'reactstrap';
import {copyToClipboard} from '../../utils/commonFunction';


const JsonKeySorter = () => {
  const [inputData, setInputData] = useState('');
  const [sortedData, setSortedData] = useState('');
  const [error, setError] = useState('');
  //TODO auto detect json from clipboard and show as placeholder

  const stringToObject = strInput => {
    const spaceCleanUp = strInput.replace(/[\n\r\t\s]+/g, '').replace(/'/g, '"');

    const keyCleanUp = spaceCleanUp.substring(1, spaceCleanUp.length - 1)
      .split(',')
      .map(s => {
        const pair = s.split(':');

        if (pair[0].indexOf('"') >= 0)
          return pair;
        return ['"' + pair[0] + '"', pair[1]];
      })
      .map(s => s.join(':'));

    return JSON.parse('{' + keyCleanUp + '}');
  };

  const handleInputData = ({target}) => {
    setError('');
    if (target.value) {
      try {
        setInputData(target.value);
        const sorted = {};
        const jsonData = stringToObject(target.value);

        for (let a of Object.keys(jsonData).sort()) {
          sorted[a] = jsonData[a];
        }

        setSortedData(JSON.stringify(sorted, null, '\t').replaceAll('\\"', ''));
      } catch (error) {
        setError('Ill formed JSON detected');
      }
    }
  };


  return (
    <>
      <div className='text-center'>
        <h1>
          JSON Key Sorter
        </h1>
        <small className='text-muted'>Currently supports level-1 objects only</small>
      </div>

      {error &&
        <UncontrolledAlert color='danger' >{error}</UncontrolledAlert>
      }
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
        <Button onClick={() => copyToClipboard(sortedData)}>
          Copy to Clipboard
        </Button>
        <Button className='ms-2' color='danger' outline onClick={() => setInputData('')}>
          Clear
        </Button>
      </div>
    </>
  );
};

export default JsonKeySorter;

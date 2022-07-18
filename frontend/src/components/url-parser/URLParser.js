import React, {useReducer} from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody, Col, FormGroup, Input, Label, Row} from 'reactstrap';

const initialState = {
  url: 'https://me:pwd@devswissknife.com:3000/url-parser?key1=value&key2=value2#the-hash',
  protocol: 'https:',
  username: 'me',
  password: 'pwd',
  hostname: 'devswissknife',
  port: '3000',
  path: '/url-parser',
  search: '?key1=value&key2=value2',
  params: ['key1=value', 'key2=value2'],
  fragment: '#the-hash',
};

const parserReducer = (state, {type, payload}) => {
  switch (type) {
    case 'CHANGE_URL':
      return {...payload};
    default:
      return state;
  }
};

const URLParser = ({themeMode}) => {
  const [state, dispatch] = useReducer(parserReducer, initialState);

  const parseURL = ({target}) => {
    const a = document.createElement('a');
    a.href = target.value;
    const keys = a.search.substring(1).split('&');

    dispatch({
      type: 'CHANGE_URL', payload: {
        url: target.value,
        protocol: a.protocol,
        hostname: a.hostname,
        port: a.port,
        path: a.pathname,
        search: a.search,
        username: a.username,
        password: a.password,
        params: keys,
        fragment: a.hash
      }
    });
  };

  return (
    <>
      <div className='text-center'>
        <h1>
          URL Parser
        </h1>
        <small className={`${themeMode ? 'text-light' : 'text-muted'}`}>Breaks down URLs into parts</small>
      </div>
      <br />
      <Row className='justify-content-center'>
        <Col sm='8'>
          <Card className='shadow' color={`${themeMode ? ' dark-card' : 'white'}`}>
            <CardBody>
              <FormGroup row>
                <Label sm='2'>Enter URL:</Label>
                <Col sm='10'>
                  <Input onChange={parseURL} value={state.url} />
                </Col>
              </FormGroup>
              <br />
              <Row className='mb-2'>
                <Col sm="3" className='text-end'>Protocol :</Col>
                <Col sm="9"><Input readOnly value={state.protocol} /></Col>
              </Row>
              <Row className='mb-2'>
                <Col sm="3" className='text-end'>Username :</Col>
                <Col sm="9"><Input readOnly value={state.username} /></Col>
              </Row>
              <Row className='mb-2'>
                <Col sm="3" className='text-end'>Password :</Col>
                <Col sm="9"><Input readOnly value={state.password} /></Col>
              </Row>
              <Row className='mb-2'>
                <Col sm="3" className='text-end'>
                  Hostname : </Col>
                <Col sm="9"><Input readOnly value={state.hostname} /></Col>
              </Row>
              <Row className='mb-2'>
                <Col sm="3" className='text-end'>Port :</Col>
                <Col sm="9"><Input readOnly value={state.port} /></Col>
              </Row>
              <Row className='mb-2'>
                <Col sm="3" className='text-end'>Path :</Col>
                <Col sm="9"><Input readOnly value={state.path} /></Col>
              </Row>
              <Row className='mb-2'>
                <Col sm="3" className='text-end'>Params :</Col>
                <Col sm="9"><Input readOnly value={state.search} /></Col>
              </Row>
              <Row className='mb-2'>
                <Col sm="3" className='text-end'>Fragment :</Col>
                <Col sm="9"><Input readOnly value={state.fragment} /></Col>
              </Row>
              {state.params.length > 0 && state.params.map((p, k) =>
                <Row key={k} className='mb-2'>
                  <Col sm="3" className='text-end'></Col>
                  <Col sm='4'><Input readOnly value={p.split('=')[0]} /></Col>
                  <Col sm='5'><Input readOnly value={p.split('=')[1]} /></Col>
                </Row>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

URLParser.propTypes = {
  themeMode: PropTypes.bool.isRequired,
};
export default URLParser;
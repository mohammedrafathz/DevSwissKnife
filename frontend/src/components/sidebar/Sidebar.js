import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardBody, Col, Input, Nav, Row} from 'reactstrap';

import styles from './Sidebar.module.css';
import SideItem from '../side-item/SideItem';

const Sidebar = ({isOpen, toggleSidebar}) => {
  const urlMap = [
    {label: 'JSON Key Sorter', path: '/json-key-sorter'},
    {label: 'Internet Speed Test', path: '/internet-speed-test'},
    {label: 'Compare JSON', path: 'compare-json'},
    {label: 'URL Encode/Decode', path: '/url-en-decoder'},
    {label: 'URL Parser', path: '/url-parser'},
    {label: 'Formatters', path: '/formatters'},
    {label: 'Quick Whiteboard', path: '/whiteboard'},
    {label: 'UML Tools', path: '/uml-tools'},
    {label: 'Quick File Sharing', path: '/quick-file-share'},
    {label: 'Temporary Email', path: '/temp-emails'},
    {label: 'Text Manipulation', path: '/text-manipulation'},
    {label: 'QR Code Generator', path: '/qr-code'}
  ];

  return (
    <>
      <Card className={`${styles.sidebar} ` + (isOpen ? '' : `${styles.hide}`)}>
        <CardBody>
          <Row>
            <Col sm={9}>
              <img className='img-fluid' src='/images/logo.png' alt='Developer Swiss Knife Logo ' />
            </Col>
            <Col>
              <Button close className='float-end' onClick={() => toggleSidebar(e => !e)} />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Input type='search' placeholder='Search Tools...' />
            </Col>
          </Row>
          <br />
          <Nav navbar className="list-group list-group-flush border">
            {urlMap.map((u, i) =>
              <SideItem key={i} label={u.label} path={u.path} />
            )}
          </Nav>
        </CardBody>
      </Card>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  toggleSidebar: PropTypes.func,
};

export default Sidebar;
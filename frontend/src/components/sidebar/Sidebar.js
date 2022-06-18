import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, CardBody, Col, Input, Nav, Row} from 'reactstrap';

import styles from './Sidebar.module.css';
import SideItem from '../side-item/SideItem';
import {MENU_MAP} from '../../utils/constants';

const Sidebar = ({isOpen, toggleSidebar}) => {
 
  const renderUrls = () => {
    let menuList = [];
    for (const k in MENU_MAP) {
      if (Object.hasOwnProperty.call(MENU_MAP, k)) {
        const element = MENU_MAP[k];
        menuList.push(<SideItem key={k} label={element.label} path={element.path} />);
      }
    }
    return menuList;
  };

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
            {renderUrls()}
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
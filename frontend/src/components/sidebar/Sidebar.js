import React from 'react';
import PropTypes from 'prop-types';
// import {Button, Card, CardBody, Col, Input, Nav, Row} from 'reactstrap';

import styles from './Sidebar.module.css';
import {Button} from 'reactstrap';
import {List} from 'react-bootstrap-icons';
import SideItem from '../side-item/SideItem';
import {MENU_MAP} from '../../utils/constants';

const Sidebar = ({isOpen, toggleSidebar, themeMode}) => {

  const renderUrls = () => {
    let menuList = [];
    for (const k in MENU_MAP) {
      if (Object.hasOwnProperty.call(MENU_MAP, k)) {
        const element = MENU_MAP[k];
        menuList.push(<SideItem themeMode={themeMode} key={k} label={element.label} path={element.path} />);
      }
    }
    return menuList;
  };
  return (
    <>
      <nav id={styles.sidebar} className={isOpen ? styles.active : ''}>
        <div className={styles.customMenu}>
          <Button className={styles.button} onClick={() => toggleSidebar(e => !e)}>
            <List size={24} />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
        <div className="p-4">
          <img className='img-fluid mt-2' src='/images/logo.png' alt='Developer Swiss Knife Logo ' />
          <ul className={styles.menuList}>
            {renderUrls()}
          </ul>
        </div>
      </nav>
      {/* <Card color={`${themeMode ? ' dark-card' : 'white'}`} className={`${styles.sidebar} ` + (isOpen ? '' : `${styles.hide}`)}>
        <CardBody>
          <Row>
            <Col sm={9}>
              
            </Col>
            <Col>
              <Button close className='float-end' color='light' onClick={() => toggleSidebar(e => !e)} />
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
      </Card> */}
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  toggleSidebar: PropTypes.func,
  themeMode: PropTypes.bool,
};

export default Sidebar;
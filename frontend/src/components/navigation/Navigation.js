import React from 'react';
import {Navbar, NavbarToggler} from 'reactstrap';
import PropTypes from 'prop-types';

const Navigation = ({toggleSidebar}) => (
  <Navbar color="faded" light >
    <NavbarToggler className="me-2" onClick={toggleSidebar} />
  </Navbar>
);

Navigation.propTypes = {
  toggleSidebar: PropTypes.func,
};

export default Navigation;
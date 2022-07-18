import React from 'react';
import {Navbar, NavbarToggler} from 'reactstrap';
import PropTypes from 'prop-types';

const Navigation = ({toggleSidebar}) => (
  <Navbar color="faded" light >
    <NavbarToggler className="me-2" onClick={toggleSidebar} />
    {/* <Button onClick={() => changeMode(m => !m)}>dark/Light</Button> */}
  </Navbar>
);

Navigation.propTypes = {
  changeMode: PropTypes.func,
  toggleSidebar: PropTypes.func,
};

export default Navigation;
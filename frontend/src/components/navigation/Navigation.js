import React from 'react';
import {Navbar} from 'reactstrap';
import PropTypes from 'prop-types';

const Navigation = () => (
  <Navbar color="faded" light style={{marginTop:'20px'}} >

  </Navbar>
);

Navigation.propTypes = {
  changeMode: PropTypes.func,
  toggleSidebar: PropTypes.func,
};

export default Navigation;
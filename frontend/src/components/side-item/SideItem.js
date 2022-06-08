import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {NavItem} from 'reactstrap';

const SideItem = ({label, path}) => {
  console.log();
  return (
    <NavItem className="list-group-item">
      <NavLink to={path}>
        {label}
      </NavLink>
    </NavItem>
  );
};

SideItem.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default SideItem;

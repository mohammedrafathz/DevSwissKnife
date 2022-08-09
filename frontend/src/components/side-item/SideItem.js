import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {NavItem} from 'reactstrap';

import styles from './SideItem.module.css';

const SideItem = ({label, path}) => (
  <NavItem className={styles.menuItem}>
    <NavLink className={styles.link} to={path}>
      {label}
    </NavLink>
  </NavItem>
);

SideItem.propTypes = {
  label: PropTypes.string.isRequired,
  themeMode: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

export default SideItem;

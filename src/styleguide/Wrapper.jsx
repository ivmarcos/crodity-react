// lib/styleguide/Wrapper.js
import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../fonts/font-awesome.css';
import '../styles/_buttons.scss';

const Wrapper = ({ children }) => (
  <MuiThemeProvider>
    {children}
  </MuiThemeProvider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;

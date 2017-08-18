// lib/styleguide/Wrapper.js
import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../fonts/fonts.css';

const Wrapper = ({ children }) => (
  <MuiThemeProvider>
    {children}
  </MuiThemeProvider>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;

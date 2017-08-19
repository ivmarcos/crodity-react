import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_SIZE = 40;

const styles = {
  icon: {
    borderRadius: '50%',
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: '1.5rem',
  },
};

const RoundFontIcon = ({ size, color, className, backgroundColor, ...props }) => {

  const customStyle = { ...styles.icon, lineHeight: `${size}px`, width: size, height: size, color, backgroundColor };

  return (
    <i
      style={customStyle}
      className={className}
      {...props}
      aria-hidden="true"
    />
  );

};

RoundFontIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

RoundFontIcon.defaultProps = {
  size: DEFAULT_SIZE,
  color: 'black',
  backgroundColor: 'white',
};

// render once
// RoundFontIcon.shouldComponentUpdate = () => false;

export default RoundFontIcon;

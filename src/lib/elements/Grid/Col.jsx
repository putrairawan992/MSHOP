import React from 'react';
import PropTypes from 'prop-types';

const Col = ({ children, xs, md, className}) => {
  const small = `col-${xs}`;
  const medium = `col-md-${md || xs}`;

  return (
    <div className={`${small} ${medium} ${className}`}>
      { children }
    </div>
  );
}

Col.defaultProps = {
  className: '',
  xs: 12
};

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  sm: PropTypes.number,
  md: PropTypes.number
};

export default Col;

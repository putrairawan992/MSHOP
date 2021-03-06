import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children, className }) => {
  return (
    <div className={ className + ' row' }>
      { children }
    </div>
  );
}

Row.defaultProps = {
  className: '',
};

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Row;

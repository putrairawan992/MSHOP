import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, fluid, className }) => {
  const screen = `${fluid ? 'container-fluid' : 'container'}`;

  return (
    <section className={ `${screen} ${className}` }>
      { children }
    </section>
  );
}

Container.defaultProps = {
  className: '',
  fluid: false
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool
};

export default Container;

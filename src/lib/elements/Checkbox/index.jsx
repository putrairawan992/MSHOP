import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'icon';

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label className="checkbox">
      <span className="radio-label">{ label }</span>

      <span className="checkbox-input">
        <input
          type="checkbox"
          name="checkbox"
          value={ value }
          onChange={e => onChange(e.target.value) }
        />

        <span className="checkbox-control">
          <Icon name="check" size={ 13 } />
        </span>
      </span>
    </label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Checkbox;

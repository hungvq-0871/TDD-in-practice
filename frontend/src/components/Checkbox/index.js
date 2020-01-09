import React from 'react';
import PropTypes from 'prop-types'

function Checkbox({ id, value, checked, onChange }) {
  return (
    <div className="custom-control custom-checkbox">
      <input id={id} type="checkbox" checked={checked} className="custom-control-input" value={value} onChange={onChange} />
      <label className="custom-control-label" htmlFor={id} />
    </div>
  )
}

Checkbox.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func,
  checked: PropTypes.bool
}

Checkbox.defaultProps = {
  onChange: null,
  value: '',
  checked: null
}

export default Checkbox;

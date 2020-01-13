import React from 'react';
import PropTypes from 'prop-types'

import Checkbox from 'components/Checkbox';
import Badge from 'components/Badge';
import TdStyle from './index.style';
import StatusTick from '../StatusTick';

function Td({
  checkboxId,
  title,
  userName,
  time,
  onChange,
}) {
  return (
    <TdStyle>
      <StatusTick />
      <Checkbox id={checkboxId} onChange={onChange} />
      <div className="detail-info">
        <h3 className="title">{title}</h3>
        <div className="created-info">
          <div className="left">
            <span className="created-by">{userName}</span>
            <StatusTick className="tick" />
            <time className="created-at">{time}</time>
          </div>
          <div className="right">
            <Badge color="green">Demo</Badge>
            <Badge color="blue">Meeting</Badge>
            <Badge color="purple">Chil</Badge>
            <Badge color="red">Abcd</Badge>
          </div>
        </div>
      </div>
    </TdStyle>
  )
}

Td.propTypes = {
  checkboxId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  title: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Td;

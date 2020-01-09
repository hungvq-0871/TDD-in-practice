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
  time
}) {
  return (
    <TdStyle>
      <StatusTick />
      <Checkbox id={checkboxId} />
      <div className="detail-info">
        <h3>{title}</h3>
        <div className="created-info">
          <div className="left">
            <span>{userName}</span>
            <StatusTick className="tick" />
            <time>{time}</time>
          </div>
          <div className="right">
            <Badge className="green" pill>Demo</Badge>
            <Badge className="blue" pill>Meeting</Badge>
            <Badge className="purple" pill>Chil</Badge>
            <Badge className="red" pill>Abcd</Badge>
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
  time: PropTypes.string.isRequired
}

export default Td;

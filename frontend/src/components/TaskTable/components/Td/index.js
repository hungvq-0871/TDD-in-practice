import React from 'react';

import Badge from 'components/Badge';
import TdStyle from './index.style';
import StatusTick from '../StatusTick';

function Td() {
  return (
    <TdStyle>
      <StatusTick />
      <div className="custom-control custom-checkbox">
        <input id="choose" type="checkbox" className="custom-control-input" />
        <label className="custom-control-label" htmlFor="choose" />
      </div>
      <div className="detail-info">
        <h3>Send site plans and building floor plan brochure</h3>
        <div className="created-info">
          <div className="left">
            <span>Erika Mateo</span>
            <StatusTick className="tick" />
            <time>1:30</time> PM
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

export default Td;

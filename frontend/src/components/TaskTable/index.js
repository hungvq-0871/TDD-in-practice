import React from 'react';
import PropTypes from 'prop-types';

import Td from './components/Td';
import TaskTableStyle from './index.style';

function TaskTable({ data }) {
  return (
    <TaskTableStyle>
      <tbody>
        {data.map(content => (
          <tr key={content.id}>
            <Td
              checkboxId={content.id}
              title={content.title}
              userName={content.username}
              time={content.time}
              onChange={() => { }}
            />
          </tr>
        ))}
      </tbody>
    </TaskTableStyle>
  )
}

TaskTable.propTypes = {
  data: PropTypes.array
}

TaskTable.defaultProps = {
  data: []
}

export default TaskTable;

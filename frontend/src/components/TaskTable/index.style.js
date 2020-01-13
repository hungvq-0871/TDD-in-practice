import React from 'react';
import styled from 'styled-components';
import { Table } from 'reactstrap';

const TaskTableStyle = styled(({ ...rest }) => <Table {...rest} />)`
  ${({ theme }) => (`
    &.table {
      td {
        border-top: 0;
        padding: 15px;
      }
      
      tr:nth-child(even) {
        background-color: ${theme.lightGrey2};
      }
    }
  `)}
`;

export default TaskTableStyle;
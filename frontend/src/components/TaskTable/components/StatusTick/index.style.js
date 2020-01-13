import styled from 'styled-components';

const StatusTickStyle = styled.span`
  ${({ theme }) => (`
    display: block;
    width: 10px;
    height: 10px;
    margin-top: 6px;
    border-radius: 100%;
    background-color: ${theme.green1};
  `)}
`;

export default StatusTickStyle;
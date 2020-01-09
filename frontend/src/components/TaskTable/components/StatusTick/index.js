import styled from 'styled-components';

const StatusTick = styled.span`
  ${({ theme, bgColor }) => (`
    display: block;
    width: 10px;
    height: 10px;
    margin-top: 6px;
    border-radius: 100%;
    background-color: ${bgColor || theme.green1};
  `)}
`;

export default StatusTick;
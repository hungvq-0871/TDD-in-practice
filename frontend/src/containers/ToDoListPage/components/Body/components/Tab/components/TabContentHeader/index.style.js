import styled from 'styled-components';

const TabContentHeaderStyle = styled.div`
  ${({ theme }) => (`
    display: flex;
    justify-content: space-between;
    padding: 30px 45px;
    font-weight: bold;

    .close-day {
      color: ${theme.grey1}
    }
  `)}
`;

export default TabContentHeaderStyle;
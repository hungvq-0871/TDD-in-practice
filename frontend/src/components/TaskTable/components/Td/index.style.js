import styled from 'styled-components';

const TdStyle = styled.td`
  ${({ theme }) => (`
    display: flex;

    .custom-checkbox {
      margin: -3px 10px 0 10px;

      .custom-control-label::before, 
      .custom-control-label::after {
        width: 20px;
        height: 20px;
      }
    }

    .detail-info {
      flex: 1;

      h3 {
        font-size: 20px;
      }

      .created-info {
        display: flex;
        justify-content: space-between;
        color: ${theme.grey1};

        .left,
        .right {
          display: flex;
          align-items: center;
        }

        .tick {
          margin: 0 10px;
          background-color: ${theme.grey1};
        }

        .badge {
          padding: 6px 10px;
          margin-left: 10px;
        }
      }
    }
  `)}
`;

export default TdStyle;
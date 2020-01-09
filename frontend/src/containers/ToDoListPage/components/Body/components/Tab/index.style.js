import styled from 'styled-components';

const TabStyle = styled.div`
  ${({ theme }) => (`
    background-color: ${theme.white};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};
    margin-top: 15px;

    .nav-tabs {
      padding: 0 30px;
      border-width: 2px;
      
      .nav-item {
        margin-bottom: 0;
      }

      .nav-link {
        border: 0;
        padding: 20px 15px;
        color: ${theme.grey1};
        cursor: pointer;
        position: relative;
        font-weight: bold;

        &::after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: transparent;
        }
        
        &.active,
        &:hover {
          color: ${theme.blue2};

          &::after {
            background-color: ${theme.orange1};
          }
        }
      }
    }

    .tab-content {
      height: 700px;
      overflow-x: auto;
    }

  `)}
`;

export default TabStyle;
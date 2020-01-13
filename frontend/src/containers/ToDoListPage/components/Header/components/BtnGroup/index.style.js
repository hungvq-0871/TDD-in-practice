import styled from 'styled-components';
import { ButtonGroup } from 'reactstrap';

const BtnGroupStyle = styled(ButtonGroup)`
  ${({ theme }) => (`
    margin-right: 15px;

    .btn {
      border-color: ${theme.grey1};
      color: ${theme.grey1};
      background-color: ${theme.white};
      outline: none;
      
      &:hover {
        border-color: ${theme.grey1};
        color: ${theme.grey1};
        background-color: ${theme.white};
      }
      
      &.btn-secondary {
        &:not(:disabled) {
          &:not(.disabled) {
            &:active {
              border-color: ${theme.grey1};
              color: ${theme.grey1};
              background-color: ${theme.white};
            }
            
            &:focus {
              box-shadow: none;
              border-color: ${theme.grey1};
              color: ${theme.grey1};
              background-color: ${theme.white};
            }
          }
        }
      }
    }
  `)}
`;

export default BtnGroupStyle;
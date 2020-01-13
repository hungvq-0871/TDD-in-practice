import styled from 'styled-components'

const BackGroundStyle = styled.div`
  ${({ theme }) => (`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    background-image: linear-gradient(to right, ${theme.blue1}, ${theme.lightBlue1});

    .upper-part {
      width: 100%;
      height: 300px;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${theme.lightGrey1}; 
    }

    .body {
      max-width: 100%;
      width: 1000px;
      z-index: 1;
    }
  `)}
`;

export default BackGroundStyle;
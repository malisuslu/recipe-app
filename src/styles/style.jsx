import styled from "styled-components";

export const ThemeProvider = styled.div`
  &:after {
    content: "";
    opacity: 80%;
    background: url("/images/kitchen.jpg");
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    height: 100vh;
    max-width: 100vw;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  /* overflow: hidden; */
`;

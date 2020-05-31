import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const LeftPanel = styled.section`
  background: black;
  flex: 2;
  padding: 50px 50px 50px 150px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  > h1 {
    font-family: "Roboto Mono", monospace;
    text-transform: uppercase;
    color: white;
    font-size: 3rem;
    margin: 0;
  }
`;

export const RightPanel = styled.section`
  background: white;
  flex: 1;
  position: relative;
  left: -1px;
`;

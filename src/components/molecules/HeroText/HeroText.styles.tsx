import styled from "styled-components";

export const Container = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: row;
  position: relative;
  &:before {
    content: "";
    width: 100px;
    border: 1px solid white;
    position: absolute;
    top: -5px;
    left: 0;
  }
  &:after {
    content: "";
    display: flex;
    flex-direction: row;
    background: white;
    height: 100%;
    width: 30px;
    position: relative;
    left: -1px;
    clip-path: polygon(0 0, 100% 63%, 100% 100%, 0% 100%);
  }
`;

export const InnerContainer = styled.div`
  background: white;

  padding-left: 20px;
  padding-right: 30px;

  text-transform: uppercase;
  font-family: "Roboto Mono", monospace;
  letter-spacing: 20px;
  font-weight: 900;
  font-size: 2rem;
`;

export const Teeth = styled.div`
  position: absolute;
  right: 15px;
  bottom: -4px;
  z-index: 999;
  display: flex;

  &:before,
  &:after {
    content: "";
    display: flex;
    height: 8px;
    width: 30px;
    margin: 2px;
    background: black;
  }

  &:before {
    clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0 100%, 0 100%, 50% 0);
  }

  &:after {
    clip-path: polygon(100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0, 50% 0);
  }
`;

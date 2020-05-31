import React from "react";
import * as Pages from "./pages";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
`;

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Pages.Home />
    </React.Fragment>
  );
};

export default App;

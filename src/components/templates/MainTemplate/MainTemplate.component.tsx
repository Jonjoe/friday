import React from "react";
import * as Styled from "./MainTemplate.styles";

import { Divider, HeroText } from "../../";

/**
 * @name MainTemplate
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

export type MainTemplateProps = {
  children: React.ReactNode;
};

const MainTemplate: React.FC<MainTemplateProps> = (
  props: MainTemplateProps
): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.LeftPanel>
        <HeroText>Friday</HeroText>
        <h1>Initialising ...</h1>
      </Styled.LeftPanel>
      <Divider />
      <Styled.RightPanel>
        <span>right</span>
      </Styled.RightPanel>
    </Styled.Container>
  );
};

export default MainTemplate;

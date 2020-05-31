import React from "react";
import * as Styled from "./HeroText.styles";

/**
 * @name HeroText
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

export type HeroTextProps = {
  children: React.ReactNode;
};

const HeroText: React.FC<HeroTextProps> = (
  props: HeroTextProps
): JSX.Element => {
  const { children } = props;

  return (
    <Styled.Container>
      <Styled.InnerContainer>{children}</Styled.InnerContainer>

      <Styled.Teeth />
    </Styled.Container>
  );
};

export default HeroText;

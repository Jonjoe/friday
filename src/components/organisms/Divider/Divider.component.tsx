import React from "react";
import * as Styled from "./Divider.styles";

import dividerImage from "./divider.png";

/**
 * @name Divider
 *
 * [Insert omponent description]
 *
 * @returns {JSX}
 */

export type DividerProps = {};

const Divider: React.FC<DividerProps> = (): JSX.Element => {
  return <Styled.Divider src={dividerImage} />;
};

export default Divider;

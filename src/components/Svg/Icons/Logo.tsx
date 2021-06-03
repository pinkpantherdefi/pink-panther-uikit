import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 45 45" {...props}>
      <image width="45" height="45" href="/images/pink-panther/logo.png" />
    </Svg>
  );
};

export default Icon;

import { SVGAttributes } from "react";

export interface IIconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: number | string;
  bgColor?: string;
}

import { FC, ReactNode } from "react";
export interface IButtonProps {
  children?: ReactNode;
}
const Button: FC<IButtonProps> = () => {
  return <div>Button</div>;
};
export default Button;

import { FC, ReactNode } from "react";
export interface IButtonProps {
  children?: ReactNode;
}
const Button: FC<IButtonProps> = ({ children }) => {
  return <div>{children}</div>;
};
export { Button };

import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  font,
  color,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton font={font} color={color} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);

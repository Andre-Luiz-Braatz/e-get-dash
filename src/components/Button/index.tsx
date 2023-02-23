import * as S from "./styles";
import { ButtonProps } from "./interface";

export function Button({
  backgroundColor,
  children,
  onClick,
  fullHeight,
  fullWidth,
  size,
  disabled,
  textColor
}: ButtonProps) {
  return (
    <S.Button
      backgroundColor={backgroundColor}
      onClick={onClick}
      fullHeight={fullHeight}
      fullWidth={fullWidth}
      size={size}
      disabled={disabled}
      textColor={textColor}
    >
      {children}
    </S.Button>
  );
}

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
  textColor,
  fontWeight,
  borderTopColor,
  borderTopWidth
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
      fontWeight={fontWeight}
      borderTopColor={borderTopColor}
      borderTopWidth={borderTopWidth}
    >
      {children}
    </S.Button>
  );
}

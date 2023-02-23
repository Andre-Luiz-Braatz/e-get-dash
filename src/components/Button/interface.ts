export interface ButtonProps {
  fullHeight?: boolean;
  fullWidth?: boolean;
  size: string;
  backgroundColor?: string;
  textColor?: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  fontWeight?: string;
}

type ButtoTypes = "simple" | "outlined";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  model: ButtoTypes;
  rounded?: boolean;
  backgroundColor?: string;
  textColor?: string;
  width?: string | number;
  height?: string | number;
}

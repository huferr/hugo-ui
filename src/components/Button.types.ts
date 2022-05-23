type ButtoTypes = "simple" | "outlined" | "simple-circle" | "outlined-circle";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  model?: ButtoTypes;
}

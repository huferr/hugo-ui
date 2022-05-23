import React from "react";
import "./Button.css";
import { ButtonProps } from "./Button.types";

export const Button = (props: ButtonProps) => {
  const {
    children,
    model,
    rounded,
    backgroundColor,
    textColor,
    width,
    height,
  } = props;

  const buttonModel: Record<ButtonProps["model"], string> = {
    simple: "hugoui-button-simple",
    outlined: "hugoui-button-outlined",
  };

  return (
    <button
      {...props}
      className={`hugoui-button ${buttonModel[model]} ${rounded && "rounded"}`}
      style={{
        backgroundColor,
        color: textColor,
        width,
        height,
      }}
    >
      {children}
    </button>
  );
};

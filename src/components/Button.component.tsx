import React from "react"
import { ButtonProps } from "./Button.types"

export const Button = (props: ButtonProps) => {
  const { children } = props
  return <button>{children}</button>
}
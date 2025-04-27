import { HTMLInputTypeAttribute, Dispatch } from "react";

export interface TextFieldProps {
  type?: HTMLInputTypeAttribute;
  value: string;
  setValue: Dispatch<string>;
  hasIcon: boolean;
  icon: React.ReactNode;
  placeholder: string;
  className?: string;
}
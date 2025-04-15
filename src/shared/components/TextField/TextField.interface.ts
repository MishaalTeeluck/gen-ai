import { HTMLInputTypeAttribute, Dispatch, SetStateAction } from "react";

export interface TextFieldProps {
  type?: HTMLInputTypeAttribute;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  hasIcon: boolean;
  icon: React.ReactNode;
  placeholder: string;
  className?: string;
}
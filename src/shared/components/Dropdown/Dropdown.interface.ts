import { Dispatch, SetStateAction } from "react";

export interface DropdownProps {
    className?: string,
    hasIcon: boolean;
    icon: React.ReactNode;
    items: MenuItem[],
    value: string,
    setValue: Dispatch<SetStateAction<string>>;
    title: string
    size?: "xs" | "sm" | "md" | "lg" | 'xl';
}

export interface MenuItem {
    value: string;
    label: string;
    action?: () => void;
  }
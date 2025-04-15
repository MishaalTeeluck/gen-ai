import { Input, InputGroup } from "@chakra-ui/react"; // assuming you're using Chakra UI
import { TextFieldProps } from "./TextField.interface";

export const TextField = (props: TextFieldProps) => {
  return (
    <InputGroup
      {...(props.hasIcon && { startElement: props.icon })}
    >
      <Input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        className={props.className}
      />
    </InputGroup>
  );
};

import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = ({ ...props }: IInputProps) => {
  return (
    <input
      placeholder="username..."
      className="border p-2 rounded-lg"
      {...props}
    />
  );
};

export default Input;

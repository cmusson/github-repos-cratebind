import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const Button = ({ children, ...props }: IButtonProps) => {
  return (
    <button
      className="bg-luminescent-300 text-black p-2 text-center tracking-wider uppercase flex justify-center items-center h-12 px-8 font-forma-djr-display font-semibold text-xs leading-none no-underline transition-all duration-150 hover:bg-luminescent-500 active:bg-luminescent-700"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface IScrollButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const ScrollButton = ({ children, ...props }: IScrollButtonProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="hover:opacity-80" onClick={scrollToTop} {...props}>
      {children}
    </button>
  );
};

export default ScrollButton;

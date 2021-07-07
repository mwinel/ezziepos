import { ReactNode, HTMLAttributes } from "react";
import classNames from "../../common/classnames";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "danger";
  children: ReactNode | any;
  onClick?: any;
  disabled?: boolean;
}

const Button = ({
  children,
  variant,
  onClick,
  disabled,
  ...props
}: ButtonProps) => {
  const rootClassName = classNames(
    "w-full block text-center text-sm px-4 py-2 font-medium rounded-md",
    variant == "primary"
      ? "border border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-50"
      : "",
    variant == "secondary"
      ? "shadow-sm text-white bg-cyan-600 hover:bg-cyan-700"
      : "",
    variant == "danger"
      ? "shadow-sm text-white bg-red-600 hover:bg-red-700"
      : "",
    disabled ? "cursor-not-allowed" : ""
  );
  return (
    <button
      type="button"
      className={rootClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

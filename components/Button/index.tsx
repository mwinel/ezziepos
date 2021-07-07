import { FC, ReactNode } from "react";
import classNames from "../../common/classnames";

type Variant = "primary" | "secondary" | "danger";

interface ButtonProps {
  children: ReactNode | any;
  variant: Variant;
  disabled?: boolean;
  onClick?: any;
  className?: any;
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  disabled,
  onClick,
  className,
}) => {
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
    disabled ? "cursor-not-allowed" : "",
    className
  );

  return (
    <button
      className={rootClassName}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

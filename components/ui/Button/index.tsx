import { PlusIcon } from "@heroicons/react/solid";
import { ReactNode, HTMLAttributes } from "react";
import classNames from "@common/classnames";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "danger";
  children: ReactNode | any;
  onClick?: any;
  disabled?: boolean;
  className?: any;
  icon?: ReactNode | any;
  textSize: "sm" | "md";
}

const Button = ({
  children,
  variant,
  onClick,
  disabled,
  className,
  icon,
  textSize,
  ...props
}: ButtonProps) => {
  const rootClassName = classNames(
    "inline-flex justify-center items-center text-sm px-4 py-2 font-medium rounded-md shadow-sm",
    variant == "primary"
      ? "border border-gray-300 text-gray-800 bg-white hover:bg-gray-50"
      : variant == "secondary"
      ? " text-white bg-cyan-600 hover:bg-cyan-700"
      : variant == "danger"
      ? " text-white bg-red-600 hover:bg-red-700"
      : "",
    textSize == "md" ? "text-base" : "text-sm",
    disabled ? "cursor-not-allowed" : ""
  );
  return (
    <button
      type="button"
      className={`${className} ${rootClassName}`}
      onClick={onClick}
      {...props}
    >
      <div>{icon}</div>
      {children}
    </button>
  );
};

export default Button;

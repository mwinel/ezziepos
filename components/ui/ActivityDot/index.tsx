import { HTMLAttributes } from "react";
import classNames from "../../../common/classnames";

interface ActivityDotProps extends HTMLAttributes<HTMLSpanElement> {
  variant: "primary" | "secondary" | "danger";
}

const ActivityDot = ({ variant, ...props }: ActivityDotProps) => {
  const rootClassName = classNames(
    "absolute block h-2.5 w-2.5 rounded-full ring-2 ring-white",
    variant === "primary" ? "bg-green-400" : "",
    variant === "secondary" ? "bg-orange-400" : "",
    variant === "danger" ? "bg-red-400" : ""
  );

  return <span className={rootClassName} {...props} />;
};

export default ActivityDot;

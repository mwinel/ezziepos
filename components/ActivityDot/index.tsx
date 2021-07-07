import { FC, ReactNode } from "react";
import classNames from "../../common/classnames";

type Variant = "primary" | "secondary" | "danger";

interface ActivityDotProps {
  variant: Variant;
}

const ActivityDot: FC<ActivityDotProps> = ({ variant }) => {
  const rootClassName = classNames(
    "absolute block h-2.5 w-2.5 rounded-full ring-2 ring-white",
    variant === "primary" ? "bg-green-400" : "",
    variant === "secondary" ? "bg-orange-400" : "",
    variant === "danger" ? "bg-red-400" : ""
  );

  return <span className={rootClassName} variant={variant} />;
};

export default ActivityDot;

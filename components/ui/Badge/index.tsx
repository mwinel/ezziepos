import classNames from "../../../common/classnames";

interface BadgeProps {
  title: string;
  variant: "success" | "secondary" | "danger";
}

const Badge = ({ title, variant }: BadgeProps) => {
  const rootClassName = classNames(
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize",
    variant === "success"
      ? "bg-green-100 text-green-800"
      : variant === "danger"
      ? "bg-red-100 text-red-800"
      : "bg-yellow-100 text-yellow-800"
  );

  const dotClassName = classNames(
    "-ml-0.5 mr-1.5 h-2 w-2",
    variant === "success"
      ? "text-green-400"
      : variant === "danger"
      ? "text-red-400"
      : "text-yellow-400"
  );

  return (
    <span className={rootClassName}>
      <svg className={dotClassName} fill="currentColor" viewBox="0 0 8 8">
        <circle cx={4} cy={4} r={3} />
      </svg>
      {title}
    </span>
  );
};

export default Badge;

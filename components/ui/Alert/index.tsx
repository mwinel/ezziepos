import {
  XIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import classNames from "@common/classnames";

interface AlertProps {
  variant: "primary" | "success" | "danger";
  text: string;
  linkText?: string;
  href?: any;
}

const Alert = ({ text, linkText, variant, href }: AlertProps) => {
  const rootClassName = classNames(
    "rounded-md p-4 text-sm",
    variant == "danger"
      ? "text-red-700 bg-red-100 border-red-400"
      : variant == "success"
      ? "text-green-700 bg-green-100 border-green-400"
      : "text-yellow-700 bg-yellow-100 border-yellow-400"
  );

  const iconClassNanme = classNames(
    "h-6 w-6",
    variant == "danger"
      ? "text-red-400"
      : variant == "success"
      ? "text-green-400"
      : "text-yellow-400"
  );

  const closeIconClassName = classNames(
    "inline-flex rounded-md ml-4 p-1.5",
    variant == "danger"
      ? "text-red-500 hover:bg-red-200 focus:outline-none"
      : variant == "success"
      ? "text-green-500 hover:bg-green-200 focus:outline-none"
      : "text-yellow-500 hover:bg-yellow-200 focus:outline-none"
  );

  return (
    <div className={rootClassName}>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          {variant == "danger" ? (
            <ExclamationCircleIcon
              className={iconClassNanme}
              aria-hidden="true"
            />
          ) : variant == "success" ? (
            <CheckCircleIcon className={iconClassNanme} aria-hidden="true" />
          ) : (
            <QuestionMarkCircleIcon
              className={iconClassNanme}
              aria-hidden="true"
            />
          )}
        </div>
        <div className="ml-3">
          <p>
            {text}{" "}
            <a href={href} className="font-medium underline cursor-pointer">
              {linkText}
            </a>
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button type="button" className={closeIconClassName}>
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;

import { ExclamationIcon, XIcon } from "@heroicons/react/solid";
import styles from "./Alert.module.css";

const Alert = ({ text, linkText, variant, href }) => {
  return (
    <div className={styles.root}>
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon className={styles.icon} aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className={styles.textWarning}>
            {text}{" "}
            <a href={href} className={styles.linkWarning}>
              {linkText}
            </a>
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className={styles.buttonWarning}
            >
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

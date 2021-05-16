import classNames from "../../common/classnames";
import styles from "./BaseButton.module.css";

const BaseButton = ({ title, variant, disabled, onClick, className, type }) => {
  const rootClassName = classNames(
    styles.root,
    variant == "primary" ? styles.primary : "",
    variant == "secondary" ? styles.secondary : "",
    variant == "danger" ? styles.danger : "",
    disabled ? styles.disabled : "",
    className
  );

  return (
    <button
      type={type}
      className={rootClassName}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default BaseButton;

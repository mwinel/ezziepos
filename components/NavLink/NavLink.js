import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "../../common/classnames";
import styles from "./NavLink.module.css";

const NavLink = ({ name, href, icon }) => {
  const router = useRouter();
  const { locale } = router;

  
  return (
    <Link href={href} locale={locale}>
      <a
        className={classNames(
          styles.item,
          href == router.pathname
            ? "text-white bg-cyan-800"
            : "text-cyan-100 bg-none"
        )}
        aria-current="page"
      >
        <div className={styles.icon} aria-hidden="true">
          {icon}
        </div>
        {name}
      </a>
    </Link>
  );
};

export default NavLink;

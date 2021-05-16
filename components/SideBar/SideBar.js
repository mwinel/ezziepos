import { useRouter } from "next/router";
import { navigation, secondaryNavigation } from "../../common/navigation";
import classNames from "../../common/classnames";
import { Logo } from "../../components";
import styles from "./Sidebar.module.css";

const SideBar = () => {
  const router = useRouter();

  return (
    // Static sidebar for desktop.
    <div className={styles.root}>
      <div className={styles.container}>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className={styles.sidebar}>
          <Logo />
          <nav className={styles.nav} aria-label="Sidebar">
            <div className="px-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    styles.item,
                    item.href == router.pathname
                      ? "text-white bg-cyan-800"
                      : "text-cyan-100 bg-none"
                  )}
                  aria-current="page"
                >
                  <item.icon className={styles.icon} aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-6 pt-6">
              <div className="px-2 space-y-1">
                {secondaryNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      styles.item,
                      item.href == router.pathname
                        ? "text-white bg-cyan-800"
                        : "text-cyan-100 bg-none"
                    )}
                  >
                    <item.icon className={styles.icon} aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

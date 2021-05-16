import { SideBar, TopHeader } from "../../components";
import styles from "./DashboardLayout.module.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      {/* Static sidebar for desktop */}
      <SideBar />
      <div className={styles.container}>
        {/* Top header */}
        <TopHeader />
        {/* Main content */}
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

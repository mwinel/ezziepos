import styles from './Header.module.css'

const Header = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export default Header;

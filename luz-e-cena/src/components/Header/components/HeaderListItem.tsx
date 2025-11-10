import styles from "../Header.module.css";

const HeaderListItem = ({ children }: React.HTMLAttributes<HTMLLIElement>) => {
  return <li className={styles.menuitem}>{children}</li>;
};

export default HeaderListItem;

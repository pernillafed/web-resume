import styles from "./Navbar.module.css";
import personalInformation from "../../assets/personalInformation.json";

const Navbar = () => {
  return <div className={styles.navbar}>{personalInformation.name}</div>;
};

export default Navbar;

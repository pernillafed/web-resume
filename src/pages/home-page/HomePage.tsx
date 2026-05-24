import Content from "../../components/content/Content";
import Hero from "../../components/hero/Hero";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homePageContainer}>
        <Hero />
        <Content />
      </div>
    </div>
  );
};

export default HomePage;

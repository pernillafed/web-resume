import Content from "../../components/content/Content";
import Hero from "../../components/hero/Hero";
import styles from "./HomePage.module.css";

const HomePage = ({ refs }) => {
    return (
        <div className={styles.homePage}>
            <div className={styles.homePageContainer}>
                <Hero />
                <Content refs={refs} />
            </div>
        </div>
    );
}
 
export default HomePage;
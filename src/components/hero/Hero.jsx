import myPhoto from "../../assets/profilePhoto.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroDescription}>
                <p className={styles.shortInfo}>28th of August 1991 | Humanistgatan 8A in Malmö</p>
                <div className={styles.contact}>
                    <h1 className={styles.contactHeading}>Contact</h1>
                    <p>+46 76 555 58 34</p>
                    <a
                        href="mailto:pernilla.lundahl@hotmail.com"
                        className={styles.contactLink}
                    >pernilla.lundahl@hotmail.com</a>
                    <a target="_blank" href="https://www.linkedin.com/in/pernilla-lundahl-80b391244" className={styles.contactLink}>LinkedIn profile</a>
                </div>
            </div>
            <img src={myPhoto} alt="Pernilla Lundahl" className={styles.heroPhoto} />
        </div>
    );
}
 
export default Hero;
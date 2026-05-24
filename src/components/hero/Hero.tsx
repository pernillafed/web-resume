import styles from "./Hero.module.css";
import MyPhoto from "../../assets/MyPhoto.jpeg";
import personalInformation from "../../assets/personalInformation.json";
import { Sections } from "../../assets/sections";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroDescription}>
        <p className={styles.shortInfo}>
          {personalInformation.dateOfBirth} | {personalInformation.city}
        </p>
        <div className={styles.contact}>
          <h1 className={styles.contactHeading}>{Sections.contact}</h1>
          <p>{personalInformation.contact.phoneNumber}</p>
          <a
            href={`mailto: ${personalInformation.contact.eMailAddress}`}
            className={styles.contactLink}
          >
            {personalInformation.contact.eMailAddress}
          </a>
          <a
            target="_blank"
            href={personalInformation.contact.linkedInProfile}
            className={styles.contactLink}
          >
            LinkedIn profile
          </a>
        </div>
      </div>
      <img
        src={MyPhoto}
        alt={personalInformation.name}
        className={styles.heroPhoto}
      />
    </div>
  );
};

export default Hero;

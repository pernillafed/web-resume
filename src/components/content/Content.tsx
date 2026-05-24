import styles from "./Content.module.css";
import { Refs } from "../../types";
import { Sections } from "../../assets/sections";
import resume from "../../assets/resume.json";

interface ContentProps {
  refs: Refs;
}

const Content = ({ refs }: ContentProps) => {
  return (
    <div className={styles.content}>
      <section>
        <h1 ref={refs.presentationRef}>{Sections.presentation}</h1>
        <div className={`${styles.subContent} ${styles.presentation}`}>
          <p>{resume.presentation.text}</p>
        </div>
      </section>
      <section>
        <h1 ref={refs.educationRef}>{Sections.education}</h1>
        <div className={`${styles.subContent} ${styles.education}`}>
          {resume.education.map((entry) => (
            <div key={entry.title}>
              <span className={styles.year}>{entry.year}</span>
              <h2>
                {entry.title} at {entry.place}
              </h2>
              <p>{entry.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1 ref={refs.workRef}>{Sections.workExperience}</h1>
        <div className={`${styles.subContent} ${styles.work}`}>
          {resume.workExperience.map((entry) => (
            <div key={entry.title}>
              <span className={styles.year}>{entry.year}</span>
              <h2>
                {entry.title} {entry.place && `at ${entry.place}`}
              </h2>
              <p>{entry.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1 ref={refs.portfolioRef}>{Sections.portfolio}</h1>
        <div className={styles.subContent}>
          <div>
            <h2>Published projects</h2>
            <div className={styles.projects}>
              {resume.portfolio.publishedProjects.map((entry) => (
                <a key={entry.url} target="_blank" href={entry.url}>
                  {entry.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2>{resume.portfolio.github.label}</h2>
            <a
              className={styles.github}
              target="_blank"
              href={resume.portfolio.github.url}
            >
              {resume.portfolio.github.url}
            </a>
          </div>
        </div>
      </section>
      <section>
        <h1 ref={refs.computerRef}>{Sections.skills}</h1>
        <div className={`${styles.subContent} ${styles.skills}`}>
          {resume.skills.map((entry) => (
            <div key={entry.category}>
              <h2>{entry.category}</h2>
              <ul>
                {entry.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1 ref={refs.languagesRef}>{Sections.languages}</h1>
        <div className={styles.subContent}>
          <ul className={styles.languages}>
            {resume.languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Content;

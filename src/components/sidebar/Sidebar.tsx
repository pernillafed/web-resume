import styles from "./Sidebar.module.css";
import { Refs } from "../../types";

interface SidebarProps {
  refs: Refs;
}

const Sidebar = ({ refs }: SidebarProps) => {
  const customScroll = (verticalScrollValue: number) => {
    window.scroll(0, verticalScrollValue - 15);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.navLinks}>
        <div onClick={() => customScroll(0)}>Contact</div>
        <div
          onClick={() =>
            customScroll(refs.presentationRef.current?.offsetTop ?? 0)
          }
        >
          Presentation
        </div>
        <div
          onClick={() =>
            customScroll(refs.educationRef.current?.offsetTop ?? 0)
          }
        >
          Education
        </div>
        <div onClick={() => customScroll(refs.workRef.current?.offsetTop ?? 0)}>
          Work experience
        </div>
        <div
          onClick={() =>
            customScroll(refs.portfolioRef.current?.offsetTop ?? 0)
          }
        >
          Portfolio
        </div>
        <div
          onClick={() => customScroll(refs.computerRef.current?.offsetTop ?? 0)}
        >
          Computer skills
        </div>
        <div
          onClick={() =>
            customScroll(refs.languagesRef.current?.offsetTop ?? 0)
          }
        >
          Languages
        </div>
      </div>
      <div className={styles.contact}>
        <p>+46 76 555 58 34</p>
        <a href="mailto:pernilla.lundahl@hotmail.com">
          pernilla.lundahl@hotmail.com
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/pernilla-lundahl-80b391244"
        >
          LinkedIn profile
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

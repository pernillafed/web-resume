import styles from "./Sidebar.module.css";

const Sidebar = ({ refs }) => {
    const customScroll = (verticalScrollValue) => {
        window.scroll(0, verticalScrollValue - 15);
    }
    
    return (
        <div className={styles.sidebar}>
            <div className={styles.navLinks}>
                <div onClick={() => customScroll(0)}>Contact</div>
                <div onClick={() => customScroll(refs.presentationRef.current.offsetTop)}>Presentation</div>
                <div onClick={() => customScroll(refs.educationRef.current.offsetTop)}>Education</div>
                <div onClick={() => customScroll(refs.workRef.current.offsetTop)}>Work experience</div>
                <div onClick={() => customScroll(refs.portfolioRef.current.offsetTop)}>Portfolio</div>
                <div onClick={() => customScroll(refs.computerRef.current.offsetTop)}>Computer skills</div>
                <div onClick={() => customScroll(refs.languagesRef.current.offsetTop)}>Languages</div>
            </div>
            <div className={styles.contact}>
                <p>+46 76 555 58 34</p>
                <a href="mailto:pernilla.lundahl@hotmail.com">pernilla.lundahl@hotmail.com</a>
                <a target="_blank" href="https://www.linkedin.com/in/pernilla-lundahl-80b391244">LinkedIn profile</a>
            </div>
        </div>
    );
}
 
export default Sidebar;
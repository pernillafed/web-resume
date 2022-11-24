import styles from "./Content.module.css";

const Content = ({ refs }) => {
    return (
        <div className={styles.content}>
            <section>
                <h1 ref={refs.presentationRef}>Presentation</h1>
                <div className={`${styles.subContent} ${styles.presentation}`}>
                    <p>
                        I'm a creative Junior Front End Developer with a special interest in web design and all things visual in web applications. I love constantly learning new things and taking on new challenges. I have a lot of experience working in agile teams, and I'm always positive and helpful towards everyone. I'm looking for a new job where I can continue to grow, both professionally and personally.
                    </p>
                </div>
            </section>
            <section>
                <h1 ref={refs.educationRef}>Education</h1>
                <div className={`${styles.subContent} ${styles.education}`}>
                    <div>
                        <span className={styles.year}>2020-2022</span>
                        <h2>Front End Developer, <span className={styles.place}>Medieinstitutet in Malmö</span></h2>
                        <p>Higher Vocational Education (400 HVE points).</p>
                    </div>
                    <div>
                        <span className={styles.year}>2013-2017</span>
                        <h2>Preschool Teacher Education, <span className={styles.place}>Malmö University</span></h2>
                        <p>Certified preschool teacher (210 university points).</p>
                    </div>
                </div>
            </section>
            <section>
                <h1 ref={refs.workRef}>Work experience</h1>
                <div className={`${styles.subContent} ${styles.work}`}>
                    <div>
                        <span className={styles.year}>2021 - 2022</span>
                        <h2>Junior Web Developer, <span className={styles.place}>Massive Entertainment in Malmö</span></h2>
                        <p>I started my journey at Massive as an intern while I was still in school and it later turned into an employment. I was part of a team working on Ubisoft's online player network - Ubisoft Connect. We worked with an agile method similar to SCRUM, which means I have a lot of experience participating in agile ceremonies. Other job assignments includes developing new features, fixing bugs, writing unit tests and documentation, and doing code review. I have also been part of a group developing an accessibility prototype from one of our applications. This was part of a project aiming towards giving us more insight and knowledge in web accessibility.</p>
                    </div>
                    <div>
                        <span className={styles.year}>2020</span>
                        <h2>Customer Service Employee, <span className={styles.place}>Finnlines in Malmö</span></h2>
                        <p>
                            I was stationed at the terminal office in the harbor and answered incoming emails and calls from customers, helped them book a trip or answered various questions about booking and traveling. I also worked in the terminal where I checked in private passengers. At Finnlines, I expanded my customer service skills, and I became very comfortable talking to people on the phone. I also became more comfortable working with computers and learned to master programs, such as eBooking and Net e-payments.
                        </p>
                    </div>
                    <div>
                        <span className={styles.year}>2017 - 2019</span>
                        <h2>Preschool Teacher</h2>
                        <p>
                            At the beginning of my preschool teacher career, I learned a lot about what it actually means to be a preschool teacher, everything from childcare to administrative work. I was also part of a team that dealt with questions about information and communication technology. As a preschool teacher, I planned and performed educational work according to the preschool curriculum's goals to aim for, and supported the children in their personal and educational development. I also developed new daily routines and activity plans. During my time as a preschool teacher, I have learned a lot about meeting different types of people, as well as the importance of routines and good structure.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <h1 ref={refs.portfolioRef}>Portfolio</h1>
                <div className={styles.subContent}>
                    <div>
                        <h2>Published projects</h2>
                        <div className={styles.projects}>
                            <a target="_blank" href="https://pernillafed-wizards-puzzle.netlify.app">Wizards Puzzle</a>
                            <a target="_blank" href="https://pernillafed-photo-review.netlify.app">Photo Review</a>
                            <a target="_blank" href="https://pernillafed-movie-db.netlify.app">TMDB (The Movie DB)</a>
                        </div>
                    </div>
                    <div>
                        <h2>GitHub repositories</h2>
                        <a className={styles.github} target="_blank" href="https://github.com/pernillafed?tab=repositories">https://github.com/pernillafed?tab=repositories</a>
                    </div>
                </div>
            </section>
            <section>
                <h1 ref={refs.computerRef}>Computer skills</h1>
                <div className={`${styles.subContent} ${styles.computerSkills}`}>
                    <div>
                        <h2>Front End</h2>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Sass</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Frameworks/Libraries</h2>
                        <ul>
                            <li>React.js</li>
                            <li>Vue.js</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Version control</h2>
                        <ul>
                            <li>Git</li>
                            <li>GitKraken</li>
                            <li>GitHub</li>
                            <li>GitLab</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Databases/APIs</h2>
                        <ul>
                            <li>Firebase</li>
                            <li>GraphQL</li>
                            <li>REST API</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Task management</h2>
                        <ul>
                            <li>Jira</li>
                            <li>Trello</li>
                        </ul>
                    </div>
                    <div>
                        <h2>UX/UI</h2>
                        <ul>
                            <li>Adobe XD</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Testing</h2>
                        <ul>
                            <li>Jest</li>
                            <li>React testing library</li>
                            <li>Vue test utils</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Editor</h2>
                        <ul>
                            <li>Visual Studio Code</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <h1 ref={refs.languagesRef}>Languages</h1>
                <div className={styles.subContent}>
                    <ul className={styles.languages}>
                        <li>Swedish (native)</li>
                        <li>English (fluent)</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
 
export default Content;
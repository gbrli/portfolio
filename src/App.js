import wip from "./wip.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="introduction" className="about-header">
          <h1>Giulia Broli</h1>
          <p><span className="subtitle">Frontend Developer</span></p>
        <nav>
          <a href="#about-me">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#work-experience">Work Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
      <section id="about-me" className="about-me">
          <h2>About Me</h2>
          <p>
            Long-time lover of all things digital, I have created, managed and hosted many a website using blogging platforms, with a focus on changing designs and writing content.
            I have now taken the plunge into web development using React and Javascript, and there's no going back! 
          </p>
          <p>
            Creativity and curiosity are my main motivators: I make it a mission to learn something new every day, and web development is ripe with opportunity. 
            I am a service-oriented problem solver with extensive experience in five-star customer service, team management and the logistics of running a small business.
          </p>
          <p>
            I believe in kindness above all, and I'm usually the peace-maker in a team. I value workplace happiness deeply, and do my best to act on this, no matter my job title.
          </p>
          <p>  
            I dedicate my spare time to music, writing, learning about the endless subjects that interest me, and exploring the wonders of the Internet.
          </p>
        </section>
        <section id="skills" className="skills">
          <section>
            <h2>Main Skills</h2>
            <ul>
              <li><p>HTML</p></li>
              <li><p>CSS</p></li>
              <li><p>Javascript</p></li>
              <li><p>Async JS & APIs</p></li>
              <li><p>React</p></li>
              <li><p>SQL</p></li>
              <li><p>Responsive UX/UI Design</p></li>
              <li><p>Figma</p></li>
              <li><p>Functional Programming</p></li>
              <li><p>Clean Code</p></li>
            </ul>
          </section>            
          <section>
            <h2>Secondary Skills</h2>
            <ul>
              <li><p>Java</p></li>
              <li><p>Object Oriented Programming</p></li>
              <li><p>Python</p></li>
              <li><p>Redux</p></li>
              <li><p>Jasmine Testing</p></li>
            </ul>     
          </section> 
          {/* <section>
            <h2>Currently Studying</h2>
            <ul>
              <li><p>Full Stack Open 2022</p></li>
              <li><p>More complex JS and React projects</p></li>
              <li><p>A CRUD project with back-end functionality</p></li>
              <li><p>React Native</p></li>
            </ul>      
          </section> */}
        </section>
        <section id="projects" className="projects">
        <h2>Projects</h2>
          <ul className="project-list">
            <li><img src={wip} alt="project screenshot"></img><p>This portfolio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
            <li><img src={wip} alt="project screenshot"></img><p>Temple of water pokemon Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
            <li><img src={wip} alt="project screenshot"></img><p>Business card Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
            <li><img src={wip} alt="project screenshot"></img><p>Pizza calc Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
            <li><img src={wip} alt="project screenshot"></img><p>Shakespeare sonnet sorter Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
            <li><img src={wip} alt="project screenshot"></img><p>Pokemon game Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></li>
          </ul>
        </section>
        <section className="education-work-wrapper">
          <section id="education" className="education">
            <h2>Education</h2>
            <p className="date">2022</p>
            <p><span className="current">Currently working on: </span>Full Stack Open 2022</p>
            <p><span className="current">Currently working on: </span>Colt Steele: Javascript Algorithm and Data Structures Masterclass</p>
            <p>Scrimba Front End Developer Path & other frontend courses</p>
            <p>Colt Steele: The Ultimate MySQL Bootcamp</p>
            <p className="date">2020 - 2021</p>
            <p>Free Code Camp: Responsive Design & Javascript</p>
            <p>The Odin Project: Foundations & Javascript (not completed)</p>
            <p>Mooc.fi Java OOP I & II</p>
            <p>Automate the Boring Stuff with Python</p>
            <p className="date">2014</p>
            <p>Bachelors in Cultural Mediation: Translation and Interpreting (Italian, English, French)</p>
          </section>
          <section id="work-experience" className="work-experience">
            <h2>Work Experience</h2>
            <p className="date">2020-2021</p>
            <p><span className="title-text">Concierge Supervisor in London, UK</span></p>
            <p>I started my role as a concierge team member and got promoted to supervisor a year into the role. Our work continued during the pandemic and our workload tripled, but me and the entire team pushed through. I was also employee of the year 2020! :)</p>
            <p className="date">2016-2019</p>
            <p><span className="title-text">Logistics Assistant in Dublin, ROI</span></p>
            <p>I worked for a small music business where I had multiple varied responsibilities, including running an entire e-commerce business on my own and creating an Amazon store independently.</p>
            <p className="date">2014-2015</p>
            <p><span className="title-text">Freelance Translator and Writer in Rome, IT</span></p>
            <p>I worked independently as a translator and writer.</p>
          </section>
        </section>
        <section id="contact" className="contact">
          <h2>Get in Touch</h2>
          <form>
            <label>Your Name</label>
            <input placeholder="John Doe"></input>
            <label>Email Address</label>
            <input placeholder="john@doe.com"></input>
            <label>Insert Message</label>
            <textarea placeholder="Words are welcome here :)"></textarea>
            <button>Email Me</button>
          </form>
        </section>
      </main>
    <footer>
      <p><a href="#introduction">Back to the Top</a></p>
      <p className="footer-text">love words code</p>
    </footer>
    </div>
  );
}

export default App;

import wip from "../wip.jpg"
import portfolio from "../portfolio.jpg"

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <ul className="project-list">
                <li>
                    <img className="project-images" src={portfolio} alt="project screenshot"></img>
                    <article>
                        <p>This portfolio is a static web page generated with React's own JSX and a standard CSS stylesheet. Each section of the website is its own component, imported into the whole application.</p>
                        <p>I have used Create React App for its simplicity, and the functionality of the form on the contact page is implemented with the EmailJS library. The social media icons are sourced from Font Awesome.</p>
                        <p>I have designed the portfolio from scratch as a challenge instead of using a template.</p>
                        <p><a href="https://github.com/Ademoons/portfolio" className="secondary-link">Link to Source Code</a></p>
                    </article>
                </li>
                <div className="separator"></div>
                <li>
                    <img className="project-images" src={wip} alt="project screenshot"></img>
                    <article>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p><a href="https://github.com/Ademoons" className="secondary-link">Link to Source Code</a></p>
                    </article>                
                </li>
                <div className="separator"></div>
                <li>
                    <img className="project-images" src={wip} alt="project screenshot"></img>
                    <article>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p><a href="https://github.com/Ademoons" className="secondary-link">Link to Source Code</a></p>
                    </article>                
                </li>
          </ul>
        </section>
    )
}

export default Projects;
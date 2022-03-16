import portfolio from "../images/portfolio.jpg"
import pokedice from "../images/pokedice.jpg"
import sss from "../images/sss.jpg"

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
                        <p><a href="https://github.com/stungmoon/portfolio" className="secondary-link">Link to Source Code</a></p>
                    </article>
                </li>
                <div className="separator"></div>
                <li>
                    <img className="project-images" src={pokedice} alt="project screenshot"></img>
                    <article>
                        <p>A dice game recreating a Pokémon battle thanks to the pokeapi API. Done entirely in vanilla HTML/CSS/JS.</p>
                        <p>I have adapted this project from the Scrimba Front End Developer Path, redesigned it completely and changed its functionality to gather API data instead of static data.</p>                       
                        <p><a href="https://github.com/stungmoon/Pokemon-Dice-Fight" className="secondary-link">Link to Project</a></p>
                        <p><a href="https://github.com/stungmoon/Pokemon-Dice-Fight" className="secondary-link">Link to Source Code</a></p>
                    </article>                
                </li>
                <div className="separator"></div>
                <li>
                    <img className="project-images" src={sss} alt="project screenshot"></img>
                    <article>
                        <p>Shakespeare's sonnets are conveniently numbered 1 to 154 and they are among my favorite works of poetry, so why not create something to display them in whatever order I want?</p>
                        <p>The project provides several detailed menu options to display different sonnets. Some of the options include searching by sonnet number or by word, displaying a sequence, applying a proportional sequence with a starting point, and more. Developed in vanilla JS, though I would like to move this to React Native one day.</p>
                        <p><a href="https://github.com/stungmoon/Shakespeare-Sonnet-Sorter" className="secondary-link">Link to Project</a></p>
                        <p><a href="https://github.com/stungmoon/Shakespeare-Sonnet-Sorter" className="secondary-link">Link to Source Code</a></p>
                    </article>                
                </li>
          </ul>
        </section>
    )
}

export default Projects;
import github from "../github-pk.svg"
import linkedin from "../linkedin-pk.svg"

function Contact() {
    return (
        <section id="contact" className="contact">
          <h2>Get in Touch</h2>
          <p>You can find me on Github, LinkedIn, or simply email me with the form below.</p>
          <div className="links-wrapper">
            <a href="https://github.com/Ademoons"><img className="social-icons" src={github} alt="github logo"></img></a>
            <a href="https://www.linkedin.com/in/giuliabroli"><img className="social-icons" src={linkedin} alt="linkedin logo"></img></a>
          </div>
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
    )
}

export default Contact;
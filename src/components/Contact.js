import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

const SERVICE_ID = "service_8tcuzd8";
const TEMPLATE_ID = "template_w659lk8";
const USER_ID = "sMCOkg8PrKvOnwtlS"

function Contact() {  

    const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Thank you for sending a message. You will receive a confirmation email shortly."
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Something went wrong, please retry.",
            text: error.text,
          })
        });
      e.target.reset()
    };

  return (
        <section id="contact" className="contact">
          <h2>Get in Touch</h2>
          <p>You can find me on Github, LinkedIn, or simply email me with the form below.</p>
          <div className="links-wrapper">
            <a href="https://github.com/stungmoon" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="social-icons" icon={faGithub} size="3x" alt="github logo" />
            </a>
            <a href="https://www.linkedin.com/in/giuliabroli" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="social-icons" icon={faLinkedin} size="3x" alt="linkedin logo" />
            </a>
          </div>

      <Form id="email-form" onSubmit={handleOnSubmit}>
        <Form.Field
          id="input"
          control={Input}
          label="Your Name"
          name="user_name"
          placeholder="John Doe"
          required
        />
        <Form.Field
          id="input"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="john@doe.com"
          required
        />        
        <Form.Field
          id="textarea"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Words are welcome here :)"
          required
        />
        <Button type="submit" >Email Me</Button>
        </Form>
      </section>
    )
  }

export default Contact
import './contact.css';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react'
import { transition } from 'three/examples/jsm/tsl/display/TransitionNode.js';
import ContactSVG from './ContactSVG';


const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,

    }
  }
}

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef();
  const form = useRef();



  //This function is ready from the site EmailJs.
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current, // استخدم `ref` هنا
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true);
          setError(false);

        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true);
          setSuccess(true);

        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" })

  return (
    <div className="contact" ref={ref}>
      <div className="cSection">
        <motion.form variants={listVariant} animate={isInView ? "animate" : "initial"}
          ref={form} onSubmit={sendEmail}>
          <motion.h1 variants={listVariant} className="cTitle">Let's keep in touch</motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <label>Name</label>
            <input
              type="text"
              // The name in the entries must match the names in the email template.
              name="from_name"
              placeholder="Mohammed Ainia"
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="mohammadaymanainia@gmail.com"
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea
              rows={10}
              name="message"
              placeholder="Write your message..."
            ></textarea>
          </motion.div>

          <motion.button variants={listVariant} className="formButton">Send</motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>

      <div className="cSection"><ContactSVG /></div>
    </div>
  );
};

export default Contact;

import styles from "../styles/Contact.module.css";
import { icons } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
  return (
    <section id="contact">
      <div className={styles.contact_container}>
        <div className={styles.contact_left}>
          <div className={styles.description}>
            <h1>Get In Touch</h1>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className={styles.contact_form}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className={styles.single_row}>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className={`${styles.form_in} ${styles.mr}`}
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className={`${styles.form_in} ${styles.ml}`}
              />
            </div>

            <div className={styles.multiple_row}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className={styles.form_in}
              />
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className={`${styles.form_in} ${styles.text}`}
              ></textarea>
              <input
                type="submit"
                name="submit"
                className={styles.submitForm}
                id="submit"
              />
              <label htmlFor="submit">
                <FontAwesomeIcon
                  icon={icons.faPaperPlane}
                  className={styles.FontAwesomeIcon}
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

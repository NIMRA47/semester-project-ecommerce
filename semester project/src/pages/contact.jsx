import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Have questions or want to work with us? We’d love to hear from you.
        </p>

        <div className="contact-card">
          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your email" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Your message"></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>Email: support@yourbrand.com</p>
            <p>Phone: 03425637028</p>
            <p>Location: Abbottabad PK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

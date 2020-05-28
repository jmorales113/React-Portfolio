import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-heading">
          <h1>Contact</h1>
          <h6>Let's work together</h6>
        </div>
        <form action="true" data-aos="fade-up" data-aos-delay={300}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name..."
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            required
          />
          <label htmlFor="subject">Subject:</label>
          <textarea
            name="subject"
            id="subject"
            cols={10}
            rows={10}
            defaultValue={""}
          />
          <input type="submit" defaultValue="Submit" />
        </form>
      </div>
    </section>
  );
}

export default Contact;

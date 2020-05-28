import React from "react";
import profileImage from "../assets/IMG_4382.jpg"
import resume from "../assets/JorgeResume.pdf"

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="profile-img" data-aos="fade-right" data-aos-delay={300}>
          <img src={profileImage} alt="ProfileImage" />
        </div>
        <div
          className="about-details"
          data-aos="fade-left"
          data-aos-delay={600}
        >
          <div className="about-heading">
            <h1>About</h1>
            <h6>Myself</h6>
          </div>
          <p>
            My name is Jorge Morales. I am currently in the process of a career
            change. I was employed in the field of education for about 10 years.
            I thought I wanted to be a teacher but when I eventually moved up to
            a Substitute Teacher, I realized it wasn't for me and I was unhappy.
            I decided I needed to make a change and have always been
            fascinated with computers and tech so I decided to give coding a
            shot and it's been the best decision I've ever made. I am currently
            enrolled in UCLA's Extension Coding Bootcamp.
          </p>
          <div className="social-media">
            <ul className="nav-list">
              <li>
                <a href="https://github.com/jmorales113" className="icon-link">
                  <i className="fab fa-github-square" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jorge-morales-b1221577/"
                  className="icon-link"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href={resume} className="icon-link">
                  <i className="far fa-file" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

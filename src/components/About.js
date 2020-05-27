import React from "react";

function About() {
  return (
    <section class="about" id="about">
      <div class="container">
        <div class="profile-img" data-aos="fade-right" data-aos-delay="300">
          <img src="assets/IMG_4382.jpg" alt="" />
        </div>
        <div class="about-details" data-aos="fade-left" data-aos-delay="600">
          <div class="about-heading">
            <h1>About</h1>
            <h6>Myself</h6>
          </div>
          <p>
            My name is Jorge Morales. I am currently in the process of a career
            change. I was employed in the field of education for about 10 years.
            I thought I wanted to be a teacher but when I eventually moved up to
            a Substitute Teacher, I realized it wasn't for me and I was unhappy.
            So, I decided I needed to make a change and I have always been
            fascinated with computers and tech so I decided to give coding a
            shot and it's been the best decision I've ever made. I am currently
            enrolled in UCLA's Extension Coding Bootcamp.
          </p>
          <div class="social-media">
            <ul class="nav-list">
              <li>
                <a href="https://github.com/jmorales113" class="icon-link">
                  <i class="fab fa-github-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jorge-morales-b1221577/"
                  class="icon-link"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="assets/JorgeResume.pdf" class="icon-link">
                  <i class="far fa-file"></i>
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

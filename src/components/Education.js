import React, { useEffect } from "react";
import AOS from "aos";

function Education() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 1800,
    });
  });

  return (
    <section className="education" id="education">
      <div className="container">
        <div
          className="section-heading"
          data-aos="fade-down"
          data-aos-delay={300}
        >
          <h1>Education</h1>
          <h6>UCLA Extension Coding Bootcamp</h6>
        </div>
      </div>
    </section>
  );
}

export default Education;

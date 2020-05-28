import React from "react";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <h1>Portfolio</h1>
          <h6>View some of my recent work</h6>
        </div>
        <div className="portfolio-item">
          <div
            className="portolio-img has-margin-right"
            data-aos="fade-right"
            data-aos-delay={300}
          >
            <img src="assets/Weather.jpg" alt="" />
          </div>
          <div
            className="portfolio-description"
            data-aos="fade-left"
            data-aos-delay={600}
          >
            <a href="https://mchisem.github.io/Weather-or-Not/">
              <h1>Weather or Not</h1>
            </a>
            <a href="https://github.com/mchisem/Weather-or-Not" className="cta">
              Github Repository
            </a>
          </div>
        </div>
        <div className="portfolio-item">
          <div
            className="portfolio-description"
            data-aos="fade-right"
            data-aos-delay={900}
          >
            <a href="https://guarded-beach-20937.herokuapp.com/">
              <h1>CoFit-19</h1>
            </a>
            <a href="https://github.com/elliotfouts/project-2" className="cta">
              Github Repository
            </a>
          </div>
          <div
            className="portfolio-img has-margin-right"
            data-aos="fade-left"
            data-aos-delay={1200}
          >
            <img src="assets/CoFit-19.png" alt="" />
          </div>
        </div>
        <div className="portfolio-item">
          <div
            className="portolio-img has-margin-right"
            data-aos="fade-right"
            data-aos-delay={1500}
          >
            <img src="assets/DailyPlanner.jpg" alt="" />
          </div>
          <div
            className="portfolio-description"
            data-aos="fade-left"
            data-aos-delay={1800}
          >
            <a href="https://jmorales113.github.io/Homework5-DayPlanner/">
              <h1>Day Planner</h1>
            </a>
            <a
              href="https://github.com/jmorales113/Homework5-DayPlanner"
              className="cta"
            >
              Github Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

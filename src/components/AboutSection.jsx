/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <span>About Us<br /></span>
        <h2>About</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="100">
            <img src="assets/img/about.png" className="img-fluid" alt="" />
            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"/>
          </div>
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
              <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
              <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
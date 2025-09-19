import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      image: "testimonials-1.jpg",
      name: "Saul Goodman",
      position: "Ceo & Founder"
    },
    {
      quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      image: "testimonials-2.jpg",
      name: "Sara Wilsson",
      position: "Designer"
    },
    {
      quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      image: "testimonials-3.jpg",
      name: "Jena Karlis",
      position: "Store Owner"
    },
    {
      quote: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      image: "testimonials-4.jpg",
      name: "Matt Brandon",
      position: "Freelancer"
    },
    {
      quote: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      image: "testimonials-5.jpg",
      name: "John Larson",
      position: "Entrepreneur"
    }
  ];

  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <span>Testimonials</span>
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{testimonial.quote}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <img src={`assets/img/testimonials/${testimonial.image}`} className="testimonial-img" alt="" />
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.position}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
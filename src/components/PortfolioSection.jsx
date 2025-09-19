import React from 'react';

const PortfolioSection = () => {
  const portfolioItems = [
    { category: 'app', image: 'app-1.jpg', title: 'App 1' },
    { category: 'product', image: 'product-1.jpg', title: 'Product 1' },
    { category: 'branding', image: 'branding-1.jpg', title: 'Branding 1' },
    { category: 'books', image: 'books-1.jpg', title: 'Books 1' },
    { category: 'app', image: 'app-2.jpg', title: 'App 2' },
    { category: 'product', image: 'product-2.jpg', title: 'Product 2' },
    { category: 'branding', image: 'branding-2.jpg', title: 'Branding 2' },
    { category: 'books', image: 'books-2.jpg', title: 'Books 2' },
    { category: 'app', image: 'app-3.jpg', title: 'App 3' },
    { category: 'product', image: 'product-3.jpg', title: 'Product 3' },
    { category: 'branding', image: 'branding-3.jpg', title: 'Branding 3' },
    { category: 'books', image: 'books-3.jpg', title: 'Books 3' }
  ];

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <span>Portfolio</span>
        <h2>Portfolio</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
            <li data-filter=".filter-books">Books</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {portfolioItems.map((item, index) => (
              <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.category}`}>
                <img src={`assets/img/portfolio/${item.image}`} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a href={`assets/img/portfolio/${item.image}`} title={item.title} data-gallery={`portfolio-gallery-${item.category}`} className="glightbox preview-link">
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a href="portfolio-details.html" title="More Details" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
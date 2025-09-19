import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      image: "team-1.jpg",
      name: "Walter White",
      position: "Chief Executive Officer",
      social: [
        { icon: "bi-twitter-x", link: "#" },
        { icon: "bi-facebook", link: "#" },
        { icon: "bi-instagram", link: "#" },
        { icon: "bi-linkedin", link: "#" }
      ]
    },
    {
      image: "team-2.jpg",
      name: "Sarah Jhonson",
      position: "Product Manager",
      social: [
        { icon: "bi-twitter-x", link: "#" },
        { icon: "bi-facebook", link: "#" },
        { icon: "bi-instagram", link: "#" },
        { icon: "bi-linkedin", link: "#" }
      ]
    },
    {
      image: "team-3.jpg",
      name: "William Anderson",
      position: "CTO",
      social: [
        { icon: "bi-twitter-x", link: "#" },
        { icon: "bi-facebook", link: "#" },
        { icon: "bi-instagram", link: "#" },
        { icon: "bi-linkedin", link: "#" }
      ]
    }
  ];

  return (
    <section id="team" className="team section">
      <div className="container section-title" data-aos="fade-up">
        <span>Section Title</span>
        <h2>Team</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              <div className="member">
                <div className="pic"><img src={`assets/img/team/${member.image}`} className="img-fluid" alt="" /></div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.position}</span>
                  <div className="social">
                    {member.social.map((social, i) => (
                      <a key={i} href={social.link}><i className={social.icon}></i></a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
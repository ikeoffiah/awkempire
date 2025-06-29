import React from "react";
import kirch from "../assets/pic10.jpeg";
import far from "../assets/pic2.jpeg";
import christ from "../assets/pic3.jpeg";
import emma from "../assets/pic4.jpeg";
import prince from '../assets/pic5.jpeg';
import bridget from '../assets/pic6.jpeg';
import pius from '../assets/pic7.jpeg';
import pic8 from '../assets/pic8.jpeg';
import pic9 from '../assets/pic9.jpeg';
import pic10 from '../assets/pic1.jpeg';

function Team() {
  const teamMembers = [
    { img: kirch, name: "Kirchoff Awanyo", role: "Founder & CEO", social: { linkedin: "#", twitter: "#" } },
    { img: far, name: "Farouk Issah", role: "Chief Operations Officer", social: { linkedin: "#", twitter: "#" } },
    { img: christ, name: "Christian Ahorsu", role: "Head of Technology", social: { linkedin: "#", twitter: "#" } },
    { img: emma, name: "Emmanuel Addo", role: "Marketing Director", social: { linkedin: "#", twitter: "#" } },
    { img: prince, name: "Prince Asiedu", role: "Financial Advisor", social: { linkedin: "#", twitter: "#" } },
    { img: bridget, name: "Bridget Ama", role: "HR Manager", social: { linkedin: "#", twitter: "#" } },
    { img: pic8, name: "Samuel Osei", role: "Business Strategist", social: { linkedin: "#", twitter: "#" } },
    { img: pic9, name: "Grace Mensah", role: "Creative Director", social: { linkedin: "#", twitter: "#" } },
    { img: pic10, name: "Daniel Kwame", role: "Project Manager", social: { linkedin: "#", twitter: "#" } },
    { img: pius, name: "Pius Ikeoffiah", role: "Lead Developer", social: { linkedin: "#", twitter: "#" } },
  ];

  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">Meet the talented individuals behind our success</p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image">
                <img src={member.img} alt={member.name} />
                <div className="team-overlay">
                  <div className="team-social">
                    <a href={member.social.linkedin} aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href={member.social.twitter} aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;

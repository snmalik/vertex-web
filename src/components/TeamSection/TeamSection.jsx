import "./TeamSection.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Team_1 from "../../assets/image/team woman-1.jpg"
import Team_2 from "../../assets/image/softwear devloper.jpg"
import Team_3 from "../../assets/image/team-1.jpg"
import Team_4 from "../../assets/image/team-4.jpg"

const team = [
  {
    name: "Olivia Martin",
    role: "Cloud Solutions Architect",
    image: Team_1,
  },
  {
    name: "Daniel Brooks",
    role: "DevOps Engineer",
    image: Team_2,
  },
  {
    name: "Ryan Cooper",
    role: "Software Engineer",
    image: Team_3,
  },
  {
    name: "Alex Deitarson",
    role: "UI/UX Designer",
    image: Team_4,
  },
];


export default function TeamSection() {
    return (
        <section className="team-section">
            <div className="team-container container">

                <div className="team-header">
                    <h5>How We Work</h5>
                    <h2>Meet Our Team</h2>
                    <p>
                        Our leadership team combines deep expertise in Cloud,
                        DevOps, CyberSecurity and Enterprise Development to
                        deliver scalable digital transformation solutions.
                    </p>
                </div>

                <div className="team-grid">
                    {team.map((member, index) => (
                        <div className="team-card" key={index}>
                            <img src={member.image} alt={member.name} />

                            <div className="overlay">
                                <div className="overlay-content">
                                    <h4>{member.name}</h4>
                                    <span>{member.role}</span>

                                    <div className="social">
                                        <a href="#"><FaFacebookF /></a>
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><FaInstagram /></a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <button className="view-btn">View More</button>

            </div>
        </section>
    );
}

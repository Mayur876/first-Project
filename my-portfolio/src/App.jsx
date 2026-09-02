import React from "react";
import "./App.css";
import reactLogo from "./assets/image.png";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import image from "./assets/image.png";
// import image from "./assets/image2.png";


const skills = [
  { name: "HTML", icon: <FaHtml5 style={{ color: "F54927" }} /> },
  { name: "CSS", icon: <FaCss3 style={{ color: "2965F1 " }} /> },
  { name: "JavaScript", icon: <FaJs style={{ color: "F0DB4F" }} /> },
  { name: "GitHub", icon: <FaGithub style={{ color: "24292E" }} /> },
  { name: "Git", icon: <FaGitAlt style={{ color: "F1502F" }} /> },
  { name: "React", icon: <FaReact style={{ color: "61DBFB" }} /> },
];

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern responsive portfolio website built with React.",
    tech: "React • CSS • JavaScript",
    image: image,
  },
  {
    title: "Web Application",
    description: "Clean and responsive web application with modern UI.",
    tech: "HTML • CSS • JavaScript",
    image: image,
  },
  {
    title: "Student Project",
    description: "A simple project created to solve real-world problems.",
    tech: "React • JavaScript",
    image: image,
  },
];

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="navbar"
      >
        <a href="#home">⌂ Home</a>
        <a href="#about">ⓘ About</a>
        <a href="#skills">⚒ Skills</a>
        <a href="#projects">&lt;/&gt; Project</a>
        <a href="#contact">▣ Contact</a>
      </motion.nav>

      {/* Home */}
      <section id="home" className="hero">
        <h1>
          <span
            className="outline"
            style={{
              fontFamily: " Montserrat', sans-serif",
              "-webkit-text-stroke": "2px black",
              color: "white",
            }}
          >
            MAYUR
          </span>{" "}
          <span className="outline">THOKARE</span>{" "}
        </h1>

        <div className="hero-bottom">
          <div className="intro">
            <h2>Forent-end Developer</h2>
            <p>
              I create websites that are clear, usable and conversion focused.
            </p>

            <a href="#contact" className="main-btn">
              Let's collaborate ↗
            </a>
          </div>

          <div className="profile-placeholder">
            <div className="profile-circle">
              <img
                src={reactLogo}
                alt=""
                style={{ borderRadius: "50%", objectFit: "cover" }}
                width={"400px"}
                height={"400px"}
              ></img>
            </div>
          </div>

          <a className="github-link" href="https://github.com/Mayur876">
            ◉ GitHub
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div>
          <span className="section-label">ABOUT</span>
          <h2>Building ideas into digital experiences.</h2>
        </div>

        <p>
          I am a passionate developer focused on creating modern, responsive and
          user-friendly websites. I enjoy learning new technologies and turning
          ideas into working products.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <span className="section-label">MY SKILLS</span>
        <h2>Technologies I work with.</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <span className="skill-icon">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects-section">
        <span className="section-label">PROJECTS</span>
        <h2>Things I've built.</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.title}
              style={{ backgroundImage: `url(${project.image})`,
              backgroundPosition:"center",
              backgroundSize:"contain",
              backgroundRepeat:"no-repeat" }}
              
            >
              
              <span className="project-number">0{index + 1}</span>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <span className="tech">{project.tech}</span>

              <button>View Project ↗</button>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="contact-info">
          <span className="section-label">CONTACT</span>

          <h2>Get In Touch.</h2>

          <p>
            Have a project in mind? Let's create something amazing together.
          </p>

          <div className="contact-details">
            <p>
              <b>✉</b> mayurthokare90@gmail.com
            </p>
            <p>☎ +91 8767229078</p>
            <p>
              <CiLocationOn /> Maharashtra, India
            </p>
          </div>

          <h3>Follow me</h3>

          <div className="socials">
            <a href="https://github.com/Mayur876">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/mayur-thokare-691a53415/">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message submitted!");
          }}
        >
          <div className="form-title">
            <span>✈</span>
            <div>
              <h3>Send a Message</h3>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          </div>

          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
          <textarea placeholder="Your message" rows="5" required />

          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>© 2026 Mayur Thokare. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

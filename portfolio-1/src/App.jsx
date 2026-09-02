import React from "react";
import "./App.css";
import reactLogo from "./assets/image.png";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaGithub, FaGitAlt, FaReact, FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import image from "./assets/image.png";

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
              fontFamily: "Montserrat, sans-serif",
              WebkitTextStroke: "2px black",
              color: "white",
            }}
          >
            MAYUR
          </span>{" "}
          <span className="outline">THOKARE</span>
        </h1>

        <div className="hero-bottom">

          <div className="intro">
            <h2>Front-end Developer</h2>

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
                alt="Mayur"
                style={{
                  borderRadius: "50%",
                  objectFit: "cover"
                }}
                width="400px"
                height="400px"
              />
            </div>
          </div>

          <a
            className="github-link"
            href="https://github.com/Mayur876"
          >
            ◉ GitHub
          </a>

        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">

        <div>
          <span className="section-label">ABOUT</span>

          <h2>
            Building ideas into digital experiences.
          </h2>
        </div>

        <p>
          I am a passionate developer focused on creating modern,
          responsive and user-friendly websites. I enjoy learning
          new technologies and turning ideas into working products.
        </p>

      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">

        <span className="section-label">MY SKILLS</span>

        <h2>Technologies I work with.</h2>

        <div className="skills-grid">

          <div className="skill">
            <span className="skill-icon">
              <FaHtml5 style={{ color: "#F54927" }} />
            </span>
            <span>HTML</span>
          </div>

          <div className="skill">
            <span className="skill-icon">
              <FaCss3 style={{ color: "#2965F1" }} />
            </span>
            <span>CSS</span>
          </div>

          <div className="skill">
            <span className="skill-icon">
              <FaJs style={{ color: "#F0DB4F" }} />
            </span>
            <span>JavaScript</span>
          </div>

          <div className="skill">
            <span className="skill-icon">
              <FaGithub style={{ color: "#24292E" }} />
            </span>
            <span>GitHub</span>
          </div>

          <div className="skill">
            <span className="skill-icon">
              <FaGitAlt style={{ color: "#F1502F" }} />
            </span>
            <span>Git</span>
          </div>

          <div className="skill">
            <span className="skill-icon">
              <FaReact style={{ color: "#61DBFB" }} />
            </span>
            <span>React</span>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects-section">

        <span className="section-label">PROJECTS</span>

        <h2>Things I've built.</h2>

        <div className="projects-grid">

          {/* Project 1 */}
          <article
            className="project-card"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }}
          >
            <span className="project-number">01</span>

            <h3>Portfolio Website</h3>

            <p>
              A modern responsive portfolio website built with React.
            </p>

            <span className="tech">
              React • CSS • JavaScript
            </span>

            <button>
              View Project ↗
            </button>
          </article>


          {/* Project 2 */}
          <article
            className="project-card"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }}
          >
            <span className="project-number">02</span>

            <h3>Web Application</h3>

            <p>
              Clean and responsive web application with modern UI.
            </p>

            <span className="tech">
              HTML • CSS • JavaScript
            </span>

            <button>
              View Project ↗
            </button>
          </article>


          {/* Project 3 */}
          <article
            className="project-card"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }}
          >
            <span className="project-number">03</span>

            <h3>Student Project</h3>

            <p>
              A simple project created to solve real-world problems.
            </p>

            <span className="tech">
              React • JavaScript
            </span>

            <button>
              View Project ↗
            </button>
          </article>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">

        <div className="contact-info">

          <span className="section-label">
            CONTACT
          </span>

          <h2>Get In Touch.</h2>

          <p>
            Have a project in mind? Let's create something amazing together.
          </p>

          <div className="contact-details">

            <p>
              <b>✉</b> mayurthokare90@gmail.com
            </p>

            <p>
              ☎ +91 8767229078
            </p>

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


        {/* Contact Form */}
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

              <p>
                I'll get back to you as soon as possible.
              </p>
            </div>

          </div>

          <input
            type="text"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            placeholder="Your email"
            required
          />

          <textarea
            placeholder="Your message"
            rows="5"
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>


      {/* Footer */}
      <footer>
        <p>
          © 2026 Mayur Thokare. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
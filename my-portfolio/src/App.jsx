import React from "react";
import "./App.css";

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "GitHub", icon: "◉" },
  { name: "Git", icon: "◆" },
  // { name: "MongoDB", icon: "🍃" },
];

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern responsive portfolio website built with React.",
    tech: "React • CSS • JavaScript",
  },
  {
    title: "Web Application",
    description: "Clean and responsive web application with modern UI.",
    tech: "HTML • CSS • JavaScript",
  },
  {
    title: "Student Project",
    description: "A simple project created to solve real-world problems.",
    tech: "React • JavaScript",
  },
];

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <a href="#home">⌂ Home</a>
        <a href="#about">ⓘ About</a>
        <a href="#skills">⚒ Skills</a>
        <a href="#projects">&lt;/&gt; Project</a>
        <a href="#contact">▣ Contact</a>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <h1>
          <span className="outline">MAYUR</span>{" "}
          <span className="outline">THOKARE</span>{" "}
          
        </h1>

        <div className="hero-bottom">
          <div className="intro">
            <h2>Forent-end Developer</h2>
            <p>
              I create websites that are clear, usable and
              conversion focused.
            </p>

            <a href="#contact" className="main-btn">
              Let's collaborate ↗
            </a>
          </div>

          <div className="profile-placeholder">
            <div className="profile-circle">MT
              <img src={"https://pngtree.com/free-png-vectors/profile-picture"} alt=""></img>
              </div>
          </div>

          <a className="github-link" href="#projects">
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
            <article className="project-card" key={project.title}>
              <span className="project-number">
                0{index + 1}
              </span>

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
            Have a project in mind? Let's create something amazing
            together.
          </p>

          <div className="contact-details">
            <p>✉ mayurthokare90@gmail.com</p>
            <p>☎ +91 8767229078</p>
            <p>⌖ Maharashtra, India</p>
          </div>

          <h3>Follow me</h3>

          <div className="socials">
            <a href="#contact">◉</a>
            <a href="#contact">◌</a>
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
          <textarea
            placeholder="Your message"
            rows="5"
            required
          />

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
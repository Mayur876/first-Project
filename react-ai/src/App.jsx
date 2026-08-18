import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <>
      
      <nav className="navbar">
        <div className="logo">
          <img src={reactLogo} alt="React Logo" />
          <h2>My First React App</h2>
        </div>

        <ul className="menu">
          <li className="active">Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to React</h1>
        <div className="line"></div>
        <p>This is my first React application.</p>
      </section>

      <hr />

      {/* About Section */}
      <section className="about">
        <div className="image-box">
          <img src={reactLogo} alt="React" />
        </div>

        <div className="content">
          <p>
            This is my first <b>React</b> project built using
            <span className="purple"> Vite.</span>
          </p>

          <p>
            React is a powerful JavaScript library for building user
            interfaces.
          </p>

          <p>
            Learning React is <mark>fun</mark> and exciting!
          </p>

          <p>
            It is <b>important</b> to practice everyday.
          </p>

          <p>
            Start building today and become
            <span className="purple"> awesome</span> developer.
          </p>

          <p>
            Make your concepts <u>strong</u> and journey
            <span className="green"> successful.</span>
          </p>
        </div>
      </section>

      <hr />

      {/* Topics */}
      <section className="lists">
        <div className="box">
          <h2>📖 Topics I am Learning</h2>

          <ul>
            <li>JSX</li>
            <li>Vite</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
          </ul>
        </div>

        <div className="box">
          <h2>📝 My Learning Steps</h2>

          <ol>
            <li>Install React</li>
            <li>Learn JSX</li>
            <li>Understand Basic Concepts</li>
            <li>Build Projects</li>
            <li>Become a React Developer</li>
          </ol>
        </div>
      </section>
      <hr />

      {/* Buttons */}
      <section className="buttons">
        <button className="btn purple-btn">Start Learning</button>
        <button className="btn blue-btn">Learn More</button>
        <button className="btn green-btn">Contact</button>
      </section>

      {/* Information */}
      <section className="info">
        <h2>👤 My Information</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Batch</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Mayur Thokare</td>
              <td>CSE</td>
              <td>2026</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <footer>
        <h2>💜</h2>
        <p>© 2026 My First React Application</p>
        <span>Keep Learning, Keep Growing! 🚀</span>
      </footer>
    </>
  );
}

export default App;
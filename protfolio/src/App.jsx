import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div>
        <title>Mayur  |  Portfolio</title>

        {/* ------NAVBAR------ */}


        <nav>
           <div class="logo">☰
    <ul id="nav-links">
      <a href="#home"> 𖠿 Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </ul>
          </div>
        </nav>
      </div>
    </div>

      {/* ------HOME------ */}
      <section>
        <div class="container home-flex" id="home">
          <div class="home-text">
            <h1>Hello, I'm <span>Mayur Gajanan Thokare </span></h1>
              <p class="Developer">Fornt end Developer</p>
          </div>

          <div class="home-img">
            <img src="https://coolpfp.com/tags/anime-boy-pfp/" alt=""/>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default App

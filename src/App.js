import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.hiddenLeft, .hiddenRight');
    hiddenElements.forEach(el => observer.observe(el));
  }, []);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('hiddenLeft')) {
          entry.target.classList.add('showLeft');
        } else if (entry.target.classList.contains('hiddenRight')) {
          entry.target.classList.add('showRight');
        }
      } else {
        if (entry.target.classList.contains('hiddenLeft')) {
          entry.target.classList.remove('showLeft');
        } else if (entry.target.classList.contains('hiddenRight')) {
          entry.target.classList.remove('showRight');
        }
      }
    });
  });

  return (
    <div className="appContainer">
      <section className="hiddenLeft">
        <img src="./assets/unnamed.png" alt="Me" className="imageProfile"/>
        <h1 className="titleText mainTitle"><q>Hello, my name is <span>Daniel Delchev</span> &#9996;</q></h1>
        <p>I'm Full Stack Developer</p>
      </section>

      <section className="hiddenRight">
        <h1 className="titleText technologiesTitle">Technologies</h1>
        <div className="imagesTechContainer">
          <div className="imageContainer"><img src="./assets/jsLogo.png" alt="JS" className="imageTech"/></div>
          <div className="imageContainer"><img src="./assets/mongodbLogo.png" alt="Mongo" className="imageTech"/></div>
          <div className="imageContainer"><img src="./assets/nodejsLogo.png" alt="Node" className="imageTech"/></div>
          <div className="imageContainer"><img src="./assets/reactLogo.png" alt="React" className="imageTech"/></div>
        </div>
      </section>

      <section className="hiddenLeft">
        <h1 className="titleText projectsTitle">Projects...</h1>
        <div className="projectContainer">
          <div className="projectImageContainer">
            <div><img src="./assets/resourceX.png" alt="resouceX" className="projectImage"/></div>
            <a className="projectButton" href="https://www.resourcex.net/">Click Me</a>
          </div>
          <div className="projectDescriptionContainer">
            <p>To enable the compelling journey toward a better future by reprogramming your organization. To empower change agents to be ambitious to tackle society's biggest challenges unencumbered by resource scarcity</p>
          </div>
        </div>
      </section>

      <section className="hiddenRight">
        <div className="emailContainerMain">
          <h1 className="titleTextEmail">Don't be shy, <span>WRITE ME</span> &#9993;</h1>
          <div className="emailContainer">
            <label htmlFor="email">Email:</label>
            <input 
              className="input"
              type="email"
              id='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="subject">Subject:</label>
            <input
              className="input"
              type="text"
              id='subject'
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
          </div>
          <div className="emailContainer">
            <label htmlFor="description">Description:</label>
            <textarea
              className="textarea"
              name="description"
              id="description"
              cols="30"
              rows="4"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <button 
              onClick={() => window.location.href =`mailto:danieldelchev1301@abv.bg?subject=${subject}&body=${description}`} 
              className="emailButton"
            >
              Send
            </button>
          </div>
        </div>
      </section>

      <section className="hiddenRight">
        <div className="contactContainerMain">
          <h1 className="titleText reachmeText">Reach <span>ME &#128073;</span></h1>
          <div className="contactImagesContainer">
            <div onClick={() => window.location.href = "https://www.facebook.com/profile.php?id=100003143973501"} className="imageContainerContact"><img src="./assets/facebook.png" alt="" /></div>
            <div onClick={() => window.location.href = "https://github.com/DanielDelchev1301"} className="imageContainerContact"><img src="./assets/github.png" alt="" /></div>
            <div onClick={() => window.location.href = "https://www.linkedin.com/in/daniel-delchev-a135b923b/"} className="imageContainerContact"><img src="./assets/linkedin.png" alt="" /></div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;

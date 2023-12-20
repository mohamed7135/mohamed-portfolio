import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Footer from '../Footer';
import MovieCat from '../images/movie-cat-2.jpg';
import Capstone from '../images/Capstone-2.jpg';
import Portfolio from '../images/Portfolio-2.jpg';

function PageHome() {
  const aboutRef = useRef(null);
  const worksRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      } else {
        entry.target.classList.remove('animated');
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    if (worksRef.current) {
      observer.observe(worksRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }

      if (worksRef.current) {
        observer.unobserve(worksRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div id="app">
        <div className="title">
          <div className="title-inner">
            <div className="mo">
              <div className="mo-inner">Mohamed Ahmed</div>
            </div>
            <div className="fwd">
              <div className="fwd-inner">Front End Web Developer</div>
            </div>
          </div>
        </div>

        <div className="image">
          {/* <img src={Boat} alt='boat' /> */}
        </div>
      </div>

      <div className="about" ref={aboutRef}>
        <h2>About</h2>
        <br />
        <p className='about-home'>Hello there! I'm a passionate Front-End Web Developer on a perpetual journey of discovery and growth. My love for crafting seamless digital experiences is fueled by a deep commitment to learning and adapting in the ever-evolving world of web development. Beyond the code, you'll find me embracing challenges with enthusiasm, bringing a blend of adaptability and quick learning to every project. My goal? To not just meet expectations but to exceed them, pushing the boundaries of what's possible in the dynamic field of front-end development. Let's create something extraordinary together!</p>
        <br />
        <a href="/about"> 
          <button className="button-arounder">Find out more!</button>
        </a>
      </div>

      <div className="works" ref={worksRef}>
        <h2>Works</h2>
        <div className='works-flex'>
          <div className="project">
            <h3>React Movie Project (Movie Cat)</h3>
            <img src={MovieCat} alt="Movie Cat" />
            <p>Dive into the React Movie Project (Movie Cat), where I honed skills in HTML5, JavaScript, Sass, GitHub, and React, crafting dynamic interfaces and gaining proficiency in state management, API handling, and component structuring.</p>
            <a href="/works"> 
              <button>View Works</button>
            </a>
          </div>

          <div className="project">
            <h3>Capstone Project</h3>
            <img src={Capstone} alt="Capstone Project" />
            <p>Embark on the FitHub journey, my Capstone project, where collaborative efforts birthed a fitness-focused website using HTML5, JavaScript, Sass, PHP, WordPress, WooCommerce, and GitHub. This experience emphasized teamwork, providing valuable insights into crafting complex web solutions and thriving in a collaborative environment.</p>
            <a href="/works">
              <button>View Works</button>
            </a>
          </div>

          <div className="project">
            <h3>Portfolio</h3>
            <img src={Portfolio} alt="Portfolio" />
            <p>Explore my portfolio, a showcase of HTML5, JavaScript, Sass, GitHub, and React prowess, offering a comprehensive overview of my work and inviting visitors to delve into diverse projects.</p>
            <a href="/works"> 
              <button>View Works</button>
            </a>
          </div>
        </div>
      </div>

      <div className='skillz'>
        <h2>Skills</h2>
        <div className="skills">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML5" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS3" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" alt="PHP" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" alt="WooCommerce" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
        </div>
      </div>
      <Footer />
      <div id="skip">
        <a href="#app" aria-label="Skip to content">
            <button>Back To Top</button>
        </a>
      </div>
    </div>
  );
}

export default PageHome;

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
            <div className="cafe">
              <div className="cafe-inner">Mohamed Ahmed</div>
            </div>
            <div className="mozart">
              <div className="mozart-inner">Front End Web Developer</div>
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
        <p>Hello there! I'm a passionate Front-End Web Developer on a perpetual journey of discovery and growth. My love for crafting seamless digital experiences is fueled by a deep commitment to learning and adapting in the ever-evolving world of web development. Beyond the code, you'll find me embracing challenges with enthusiasm, bringing a blend of adaptability and quick learning to every project. My goal? To not just meet expectations but to exceed them, pushing the boundaries of what's possible in the dynamic field of front-end development. Let's create something extraordinary together!</p>
        <br />
        <a href="/about">
          <button className="button-arounder">About Me</button>
          </a>
      </div>

      <div className="works" ref={worksRef}>
        <h2>Works</h2>
        <div className='works-flex'>
            {/* Project 1: React Movie Project (Movie Cat) */}
        <div className="project">
          <h3>React Movie Project (Movie Cat)</h3>
          <img src={MovieCat} alt="Movie Cat" />
          <p>Description of the React Movie Project.</p>
          <a href="/works"> {/* Adjust the link accordingly */}
          <button className="button-arounder">Back to Home</button>
        </a>
        </div>

        {/* Project 2: Capstone Project */}
        <div className="project">
          <h3>Capstone Project</h3>
          <img src={Capstone} alt="Capstone Project" />
          <p>Description of the Capstone Project.</p>
          <a href="/works"> {/* Adjust the link accordingly */}
          <button>Back to Home</button>
        </a>
        </div>

        {/* Project 3: Portfolio */}
        <div className="project">
          <h3>Portfolio</h3>
          <img src={Portfolio} alt="Portfolio" />
          <p>Description of the Portfolio.</p>
          <a href="/works"> {/* Adjust the link accordingly */}
          <button>Back to Home</button>
        </a>
        </div>
        </div>
      </div>
        {/* Skills section */}
        
        <div className='skillz'>
        <h2>Skills</h2>
        <div className="skills">
          {/* Icons remain unchanged */}
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
      </div>
    );
  }

  export default PageHome;
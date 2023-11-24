import React from 'react';
import Footer from '../Footer';
import MovieCat from '../images/movie-cat-2.jpg';
import Capstone from '../images/Capstone-2.jpg'; 
import Portfolio from '../images/Portfolio-2.jpg';   

function PageWorks() {
    return (
      <div>
        <div className="project">
          <h1>Works</h1>
          <br />
          {/* First Project: React Movie Project (Movie Cat) */}
          <h2>React Movie Project (Movie Cat)</h2>
          <img src={MovieCat} alt="Movie Cat" />
          <div className="icon-row">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="24" height="24" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="24" height="24" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" width="24" height="24" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="24" height="24" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="24" height="24" />
          </div>
          <p>
            I worked on the React Movie Project, also known as Movie Cat. This project involved using various technologies 
            such as HTML5, JavaScript, Sass, GitHub, and React. It provided me with valuable experience in building 
            responsive and dynamic user interfaces. I gained proficiency in managing state, handling API requests, and 
            structuring components in a React application.
          </p>
          <a href="https://justiny.ca/moviecat/" target="_blank" rel="noopener noreferrer">
            <button>View Project</button>
          </a>
  
  <br />
  <br />
          {/* Second Project: Capstone Project */}
          <h2>Capstone Project</h2>
          <img src={Capstone} alt="Capstone Project" />
          <div className="icon-row">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="24" height="24" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="24" height="24" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" width="24" height="24" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" alt="PHP" width="24" height="24" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress" width="24" height="24" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" alt="WooCommerce" width="24" height="24" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="24" height="24" />
          </div>
          <p>
            For the Capstone project, I collaborated with my classmates to create FitHub, a website aimed at helping 
            individuals achieve their fitness goals. This project emphasized teamwork and utilized technologies such as 
            HTML5, JavaScript, Sass, PHP, WordPress, WooCommerce, and GitHub. It provided me with valuable insights into 
            building complex web solutions and working effectively in a team environment.
          </p>
          <a href="https://fithub.bcitwebdeveloper.ca/" target="_blank" rel="noopener noreferrer">
            <button>View Project</button>
          </a>
          <br />
        <br />

        {/* Third Project: Portfolio */}
        <h2>Portfolio</h2>
        <img src={Portfolio} alt="Portfolio" />
        <div className="icon-row">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="24" height="24" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="24" height="24" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" width="24" height="24" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="24" height="24" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="24" height="24" />
        </div>
        <p>
          For my Portfolio, I utilized HTML5, JavaScript, Sass, GitHub, and React. This portfolio serves as a comprehensive 
          overview of my work and allows visitors to explore various projects.
        </p>
        <a href="/"> {/* Adjust the link accordingly */}
          <button>Back to Home</button>
        </a>
        </div>
       

        <Footer />
      </div>
    );
  }
  
  export default PageWorks;
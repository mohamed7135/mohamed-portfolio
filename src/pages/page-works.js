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

      <div className='unique-project'>
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
          In the context of the Capstone project, I played a pivotal role as a collaborative team member, working seamlessly with classmates to bring FitHub to fruition—a purpose-driven website dedicated to guiding individuals on their fitness journeys. Emphasizing the value of teamwork, this project underscored my ability to contribute effectively within a group dynamic.

          Utilizing a sophisticated technology stack encompassing HTML5, JavaScript, Sass, PHP, WordPress, WooCommerce, and GitHub, FitHub exemplifies the successful integration of diverse skill sets within our team. The project served as a valuable experience, not only in developing intricate web solutions but also in cultivating a keen awareness of effective collaboration within a team-oriented environment. My role as a team player in FitHub reflects my commitment to contributing meaningfully to collective goals, with a focus on fostering synergy rather than individual prominence.
        </p>
        <a href="https://fithub.bcitwebdeveloper.ca/" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
        </div>
        {/* <br />
        <br /> */}

        
        <div className='unique-project'>
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
          Immersing myself in the captivating realm of the React Movie Project, affectionately dubbed Movie Cat, was a collaborative journey where I seamlessly integrated HTML5, JavaScript, Sass, GitHub, and React technologies. As a vital member of a dynamic team, this experience not only enriched my technical proficiency but also showcased my adeptness in teamwork. The project unfolded as a canvas for honing my skills in constructing responsive and dynamic user interfaces, unraveling the intricate dance of managing state, deftly handling API requests, and architecting cohesive components within the intricate tapestry of a React application. Through the lens of collaboration, this endeavor became a testament to my prowess not just in technology but in the art of effective teamwork, where synergy elevated the project beyond the sum of its individual parts.
        </p>
        <a href="https://justiny.ca/moviecat/" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
        </div>

        {/* <br />
        <br /> */}

        <div className='unique-project'>
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
          In developing my Portfolio, I applied a practical approach, leveraging HTML5, JavaScript, Sass, GitHub, and expanding my proficiency in React. This straightforward yet thoughtfully designed website offers a modest showcase of my work, reflecting both my dedication and the learning journey I undertook to enhance my skills in React. It stands as a testament to my commitment to continuous improvement and practical application of evolving knowledge in web development.
        </p>
        <a href="/">
          <button>Back to Home</button>
        </a>
        </div>
      </div>

      <Footer />
      <div id="skip">
        <a href="/works" aria-label="Skip to content">
          <button>Back To Top</button>
        </a>
      </div>
    </div>
  );
}

export default PageWorks;

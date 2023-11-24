import React, { useRef, useEffect } from 'react';
import Footer from '../Footer';
import '../App.css';
import technologiesImage from '../images/technologies.jpg';
import boardGamesImage from '../images/Board-games.jpg';
import esportsImage from '../images/Esports.jpg';
import sportsImage from '../images/nba.jpg';
import ultimateImage from '../images/Ultimate.jpg';
import gymImage from '../images/Gym.jpg';
import cheesecakeImage from '../images/Cheesecake.jpg';
import mentorImage from '../images/Mentor.jpg';
import bikeImage from '../images/Bike.jpg';

function PageAbout() {
  const facts = [
    "Learning about new technologies.",
    "Playing board games.",
    "Enjoying competitive gaming (Esports).",
    "Being a huge fan of Hockey, Football, and Basketball.",
    "Playing Ultimate Frisbee and Soccer.",
    "Going to the gym.",
    "Loving Cheesecake.",
    "Passionate about mentoring the younger generation.",
    "Being an avid Bike Rider."
  ];

  const factRef = useRef(null);

  useEffect(() => {
    rotateFacts();
    const interval = setInterval(() => {
      if (factRef.current) {
        factRef.current.classList.add('fadeOut');
        setTimeout(() => {
          factRef.current.classList.remove('fadeOut');
          rotateFacts();
        }, 500);
      }
    }, 5000); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);

  const rotateFacts = () => {
    if (factRef.current) {
      const remainingFacts = facts.filter(fact => fact !== factRef.current.innerText);
      const randomFact = remainingFacts[Math.floor(Math.random() * remainingFacts.length)];
      factRef.current.innerText = randomFact;
    }
  };

  return (
    <div className="about">
      <h2>About Me</h2>
      <section className="animation">
        <div ref={factRef} className="facts">
          {facts[0]}
        </div>
      </section>
      <p>Welcome to my corner of the web! I'm an ardent Front-End Web Developer with a perpetual thirst for knowledge and growth. My journey in web development is not just a career but a passionate exploration. I find joy in the intricate dance between creativity and functionality, constantly seeking to enhance the digital landscape with innovative and user-centric interfaces.
        <br />
        My motivation is deeply rooted in the belief that web development is an art form, and each line of code is a brushstroke that shapes a unique online experience. I thrive on challenges, viewing them not as obstacles but as opportunities to push the boundaries of what's possible. Beyond mastering languages like JavaScript, HTML5 & CSS/SASS, I bring a holistic approach, incorporating UI/UX design principles and leveraging version control tools like Git.
        <br />
        In collaborative environments, I'm the curious mind always seeking to learn and contribute. My journey goes beyond formal education; I immerse myself in the latest industry trends, ensuring my work aligns with the cutting edge. Eager to contribute my skills to projects that redefine web development standards, I bring adaptability, enthusiasm, and a growing skill set to every endeavor.
        <br />
        So, if you're looking to embark on a digital journey that goes beyond the ordinary, let's collaborate and craft something extraordinary together! Your vision, my code – a perfect match for creating impactful online experiences.</p>
        <br />

      {/* Gallery Section */}
      <h2>Gallery</h2>
      <ul className="gallery">
        <li>
          <a href="">
            <figure>
              <img src={technologiesImage} alt="Learning about new technologies." />
              <figcaption>Learning about new technologies.</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="">
            <figure>
              <img src={boardGamesImage} alt="Playing board games." />
              <figcaption>Playing board games.</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="">
            <figure>
              <img src={esportsImage} alt="Enjoying competitive gaming (Esports)." />
              <figcaption>Enjoying competitive gaming (Esports).</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="">
            <figure>
              <img src={sportsImage} alt="Being a huge fan of Hockey, Football, and Basketball." />
              <figcaption>Being a huge fan of Hockey, Football, and Basketball.</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="">
            <figure>
              <img src={ultimateImage} alt="Playing Ultimate Frisbee and Soccer." />
              <figcaption>Playing Ultimate Frisbee and Soccer.</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="">
            <figure>
              <img src={gymImage} alt="Going to the gym." />
              <figcaption>Going to the gym.</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="">
            <figure>
              <img src={cheesecakeImage} alt="Loving Cheesecake." />
              <figcaption>Loving Cheesecake.</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="">
            <figure>
              <img src={mentorImage} alt="Passionate about mentoring the younger generation." />
              <figcaption>Passionate about mentoring the younger generation.</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="">
            <figure>
              <img src={bikeImage} alt="Being an avid Bike Rider." />
              <figcaption>Being an avid Bike Rider.</figcaption>
            </figure>
          </a>
        </li>
      </ul>
      
      {/* Rest of your about me content */}
      
      <Footer />
    </div>
  );
}

export default PageAbout;

import React, { useRef, useEffect } from 'react';
import Footer from '../Footer';
import '../App.css';
import technologiesImage from '../images/technologies.jpg';
import boardGamesImage from '../images/Board-games.jpg';
import esportsImage from '../images/gaming.jpg';
import sportsImage from '../images/nba.jpg';
import ultimateImage from '../images/Ultimate.jpg';
import gymImage from '../images/Gym.jpg';
import cheesecakeImage from '../images/Cheesecake.jpg';
import mentorImage from '../images/Mentor.jpg';
import bikeImage from '../images/Bike.jpg';
import aboutImage from '../images/about-photo.jpeg';

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
    }, 5000); 

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
    <div className="about-me">
      <h2>About Me</h2>
      <br />
     <div className='about-flex'>
      <div className='about-p'>
          <p>Welcome to my corner of the web! I'm an ardent Front-End Web Developer with a perpetual thirst for knowledge and growth. My journey in web development is not just a career but a passionate exploration. I find joy in the intricate dance between creativity and functionality, constantly seeking to enhance the digital landscape with innovative and user-centric interfaces.
            <br />
            My motivation is deeply rooted in the belief that web development is an art form, and each line of code is a brushstroke that shapes a unique online experience. I thrive on challenges, viewing them not as obstacles but as opportunities to push the boundaries of what's possible. Beyond mastering languages like JavaScript, HTML5 & CSS/SASS, I bring a holistic approach, incorporating UI/UX design principles and leveraging version control tools like Git.
            <br />
            In collaborative environments, I'm the curious mind always seeking to learn and contribute. My journey goes beyond formal education; I immerse myself in the latest industry trends, ensuring my work aligns with the cutting edge. Eager to contribute my skills to projects that redefine web development standards, I bring adaptability, enthusiasm, and a growing skill set to every endeavor.
            <br />
            So, if you're looking to embark on a digital journey that goes beyond the ordinary, let's collaborate and craft something extraordinary together! Your vision, my code – a perfect match for creating impactful online experiences.</p>
          <br />
        </div>
        <div>
        <img src={aboutImage} className='Mohamed-photo' alt="Mohamed Ahmed headshot." />
        </div>
     </div>

      <div className='hobbies'>
        <h2>My Hobbies & Passions</h2>
        <ul className="gallery">
          <li>
            <a href="">
              <figure>
                <img src={technologiesImage} alt="Learning about new technologies." />
                <figcaption>Embracing the ever-evolving landscape of technology is my forte. If there's a chance to dive into the tech world and broaden my horizons, count me in! I'm like a digital explorer on a quest for the latest and greatest innovations, navigating the vast terrain of bits and bytes.</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img src={boardGamesImage} alt="Playing board games." />
                <figcaption>Board games are my jam, and when it comes to favorites, I've got an eclectic mix: Avalon, Coup, Codenames, Connect 4—the list goes on! It's like assembling a team of strategic masterminds and diving headfirst into the thrilling realm of cardboard conquests. Trust me, the battles are legendary!</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img src={esportsImage} alt="Enjoying competitive gaming (Esports)." />
                <figcaption>Competitive gaming, or esports, is my niche, and I'm a devoted fan. I revel in the excitement, strategy, and adrenaline-pumping moments that competitive gaming offers. </figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img src={sportsImage} alt="Being a huge fan of Hockey, Football, and Basketball." />
                <figcaption>Let's talk sports—specifically hockey, football, and basketball. The Vancouver Canucks, Denver Broncos, and Minnesota Timberwolves are my ride-or-die teams. Warning: once you get me started on any of these, there's no stopping the passionate sports monologue. Proceed with caution, or grab some popcorn—it might take a while!</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img src={ultimateImage} alt="Playing Ultimate Frisbee and Soccer." />
                <figcaption>Engaging in weekly bouts of Ultimate Frisbee and soccer brings me sheer joy. It's the perfect blend of competition and camaraderie, keeping me hooked on the pure, unadulterated fun of these sports.</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img src={gymImage} alt="Going to the gym." />
                <figcaption>The gym is my sanctuary, my happy place where I sculpt my physique and nurture a healthy lifestyle. It's not just about lifting weights; it's a holistic approach to well-being. I believe in the power of an active lifestyle, and the gym is where I embrace the burn with a smile, celebrating the journey to a healthier, happier me.</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img src={cheesecakeImage} alt="Loving Cheesecake." />
                <figcaption>Cheesecake is my ultimate culinary weakness. No need for cheesy descriptions; let's just say that a perfect slice of cheesecake is like a moment of sweet surrender, a guilty pleasure that never fails to satisfy my dessert cravings.</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img src={mentorImage} alt="Passionate about mentoring the younger generation." />
                <figcaption>Mentoring the younger generation is more than a passion; it's a deeply fulfilling mission. With a background in education, I see the impact of shaping young minds as a responsibility of profound importance. Guiding and inspiring the next generation is a commitment to building a brighter future.</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img src={bikeImage} alt="Being an avid Bike Rider." />
                <figcaption>Long bike rides are my escape, and exploring the vast network of bike routes in the Greater Vancouver Area is my favorite pastime. No need to picture me on two wheels; just know that I have an insatiable love for the open road, a bike, and the endless possibilities that come with each pedal.</figcaption>
              </figure>
            </a>
          </li>
        </ul>

      </div>

      <Footer />
      <div id="skip">
        <a href="/about" aria-label="Skip to content">
          <button>Back To Top</button>
        </a>
      </div>
    </div>
  );
}

export default PageAbout;

import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
import sample1 from "../../assets/weather-dashboard2.png";
import sample2 from "../../assets/password-generator.png";
import sample3 from "../../assets/js-quiz3.png";
import sample4 from "../../assets/team-profile-generator.png";
import sample5 from "../../assets/happytrees.png";
import sample6 from "../../assets/dognostic.png";


export default function Portfolio() {
 
  return (
    <section className="portfolio">
      <div className="app-row">
        <div className='app'>
        <img src={sample1} alt="Weather App" className="image" />
        <div className='image-overlay image-overlay-blur'>
          <p className='app-name'>Weather App</p>
          <a href="https://dogmom3.github.io/weather-dashboard/"
             className="app-link" target="blank">Deployed App</a>
          <a href="https://github.com/dogmom3/weather-dashboard"
             className="app-link" target="blank">GitHub Repo</a>
        </div>
        </div>
        <div className='app'>
        <img src={sample2} alt="Password Generator" className="image" />
        <div className='image-overlay image-overlay-blur'>
          <p className='app-name'>PW Generator</p>
          <a href="https://dogmom3.github.io/password-generator/"
             className="app-link" target="blank">Deployed App</a>
            <a href="https://github.com/dogmom3/password-generator"
              className="app-link" target="blank">GitHub Repo</a>
        </div>
        </div>
        <div className='app'>
        <img src={sample3} alt="Quiz" className="image" />
        <div className='image-overlay image-overlay-blur'>
        <p className='app-name'>Quiz</p>
            <a href="https://dogmom3.github.io/javascript-quiz/" 
          className="app-link" target="blank">Deployed App</a>
            <a href="https://github.com/dogmom3/javascript-quiz" 
          className="app-link" target="blank">GitHub Repo</a>
        </div>
        </div>
      </div>
      <div className="app-row">
        <div className='app'>
        <img src={sample4} alt="Employee Profile" className="image" />
        <div className='image-overlay image-overlay-blur'>
        <p className='app-name'>Employee Profile</p>
            <a href="https://dogmom3.github.io/employee-data-input/"
            className="app-link" target="blank">Deployed App</a>
            <a href="https://github.com/dogmom3/employee-data-input"
            className="app-link" target="blank">GitHub Repo</a>
        </div>
        </div>
        <div className='app'>
        <img src={sample5} alt="Happy Trees" className="image" />
        <div className='image-overlay image-overlay-blur'>
        <p className='app-name'>Happy Trees</p>
            <a href="https://gentle-lake-59989.herokuapp.com/" 
          className="app-link" target="blank">Deployed App</a>
            <a href="https://github.com/HackStreetPeople/happy-trees"
            className="app-link" target="blank">GitHub Repo</a>
        </div>
        </div>
        <div className='app'>
        <img src={sample6} alt="Dognostic" className="image" />
        <div className='image-overlay image-overlay-blur'>
        <p className='app-name'>Dognostic</p>
            <a href="https://boolean-hooligans.github.io/dognostic-1/"
            className="app-link" target="blank">Deployed App</a>
            <a href="https://github.com/Boolean-Hooligans/dognostic-1"
            className="app-link" target="blank">GitHub Repo</a>
        </div>
        </div>
      </div>
    </section>
  );
}
import React, {useState} from "react";

// import { capitalizeFirstLetter } from "../../utils/helpers";
import sample1 from "../../assets/weather-dashboard2.png";
import sample2 from "../../assets/password-generator.png";
import sample3 from "../../assets/js-quiz3.png";
import sample4 from "../../assets/team-profile-generator.png";
import sample5 from "../../assets/happytrees.png";
import sample6 from "../../assets/dognostic.png";


export default function Portfolio() {
  const [projects] = useState([
    {
      name: 'Weather App',
      photo: sample1,
      githubLink: 'https://dogmom3.github.io/weather-dashboard/',
      deployLink:"https://github.com/dogmom3/weather-dashboard"
    },
    {
      name: 'Password Generator',
      photo: sample2,
      githubLink: 'https://dogmom3.github.io/password-generator/',
      deployLink:"https://github.com/dogmom3/password-generator"
    },
    {
      name: 'Quiz',
      photo: sample3,
      githubLink: 'https://dogmom3.github.io/javascript-quiz/',
      deployLink:"https://github.com/dogmom3/javascript-quiz"
    },
    {
      name: 'Employee Profile',
      photo: sample4,
      githubLink: 'https://dogmom3.github.io/employee-data-input/',
      deployLink:"https://github.com/dogmom3/employee-data-input"
    },
    {
      name: 'Happy Trees',
      photo: sample5,
      githubLink: 'https://gentle-lake-59989.herokuapp.com/',
      deployLink:"https://github.com/HackStreetPeople/happy-trees"
    },
    {
      name: 'Dognostic',
      photo: sample6,
      githubLink: 'https://boolean-hooligans.github.io/dognostic-1/',
      deployLink:"https://github.com/Boolean-Hooligans/dognostic-1"
    }
   
  ]);
  return (
    <section className="portfolio">
      {projects.map((project)=>(
        <div className='app'>
          <img src={project.photo} alt={project.name} className="image" />
          <div className='image-overlay image-overlay-blur'>
            <p className='app-name'>{project.name}</p>
            <a href={project.githubLink}
             className="link" target="blank">Deployed App</a>
            <a href={project.deployLink}
             className="link" target="blank">GitHub Repo</a>
          </div>
        </div>
      ))}
    </section>
  );
}
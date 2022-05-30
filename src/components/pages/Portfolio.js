import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import sample1 from '../../assets/weather-dashboard2.png'
import sample2 from '../../assets/password-generator.png'
import sample3 from '../../assets/js-quiz3.png'
import sample4 from '../../assets/team-profile-generator.png'
import sample5 from '../../assets/happytrees.png'

function Portfolio(props) {
  const currentImage = {
    name: "Weather App",
    description:
      "App for searching and viewing weather data in various cities",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentImage.name)}</h1>
      {/* <p>{currentImage.name}</p> */}
      <div className='flex-row'>
          <img
            src={sample1}
            alt='Weather App'
            className='img-thumbnail mx-1'
          />
      </div>
      <h1>{capitalizeFirstLetter(currentImage.name)}</h1>
      {/* <p>{currentImage.name}</p> */}
      <div className='flex-row'>
          <img
            src={sample2}
            alt='Password Generator'
            className='img-thumbnail mx-1'
          />
      </div>
      <h1>{capitalizeFirstLetter(currentImage.name)}</h1>
      {/* <p>{currentImage.name}</p> */}
      <div className='flex-row'>
          <img
            src={sample3}
            alt='Quiz'
            className='img-thumbnail mx-1'
          />
      </div>
      <h1>{capitalizeFirstLetter(currentImage.name)}</h1>
      {/* <p>{currentImage.name}</p> */}
      <div className='flex-row'>
          <img
            src={sample4}
            alt='Employee Profile Builder'
            className='img-thumbnail mx-1'
          />
      </div>
      <h1>{capitalizeFirstLetter(currentImage.name)}</h1>
      {/* <p>{currentImage.name}</p> */}
      <div className='flex-row'>
          <img
            src={sample5}
            alt='Happy Trees'
            className='img-thumbnail mx-1'
          />
      </div>

    </section>
    
    );
  }
  export default Portfolio;




//   const projects = [
//     { name: "Weather App",
//       description:
//         "An app that allows you to search for weather forecasts by city and maintains your search history on the page.",
//     },
//     { name: "Password Generator",
//       description:
//         "Generates a random password based on criteria selected by the user.",
//     },
//     { name: "Quiz",
//       description:
//         "An app that asks a series of questions that must be answered within a given timeframe and then keeps track of your score based on correctly answered questions.",
//     },
//     { name: "Employee Team Profile Builder",
//       description:
//         "A way to input data on employee or team members and then collectively view all of those profiles on one page.",
//     },
//     { name: "Happy Trees",
//       description:
//         "This app is useful for mitigation companies to input and track data on trees planted."
//     }
//   ];
//   function projectSelected(name) {
//     console.log(`${name} clicked`)
//   }
//   return (
//     <div>
// <h1>Portfolio:</h1>

//       <h2>
//         <a data-testid="link" href="/">
//           <span role="img" aria-label="projects">
//             {" "}
//            📸
//          </span>{" "}
//           Oh Snap!
//          </a>
//        </h2>

//        <div>
//          <ul className="flex-row">
//          {projects.map((project) => (
//   <li
//     className="mx-1"
//     key={project.name}
//   >
//     <span onClick={() => projectSelected(project.name)} >
//       {project.name}
//     </span>
//   </li>
// ))}
//         </ul>
//       </div>
//     </div>
//   );

// import React, { useState } from "react";
// import { capitalizeFirstLetter } from "../utils/helpers";

// function Nav() {
//   const [images] = useState([
//     {name: "Weather App",
//       description:
//         "An app that allows you to search for weather forecasts by city and maintains your search history on the page",
//     },
//     {name: "Password Generator",
//       description:
//         "Generates a random password based on criteria selected by the user",
//     },
//     {name: "Quiz",
//       description:
//         "An app that asks a series of questions that must be answered within a given timeframe and then keeps track of your score based on correctly answered questions",
//     },
//     {name: "Employee Team Profile Builder",
//       description:
//         "A way to input data on employee or team members and then collectively view all of those profiles on one page",
//     },
//     {name: "Happy Trees",
//       description:
//         "This app is useful for mitigation companies to input and track data on trees planted",
//     },
//   ]);
//   const [currentImage, setCurrentImage] = useState(images[0]);

//   return (
//     <header className="flex-row px-1">
//       <h2>
//         <a data-testid="link" href="/">
//           <span role="img" aria-label="camera">
//             {" "}
//             📸
//           </span>{" "}
//           Oh Snap!
//         </a>
//       </h2>
//       <nav>
//         <ul className="flex-row">
//           <li className="mx-2">
//             <a href="#about">About me</a>
//           </li>
//           <li>
//             <span>Contact</span>
//           </li>
//           {images.map((image) => (
//             <li
//               className={`mx-1 ${
//                 currentImage.name === image.name && "navActive"
//               }`}
//               key={image.name}
//             >
//               <span
//                 onClick={() => {
//                   setCurrentImage(image);
//                 }}
//               >
//                 {capitalizeFirstLetter(image.name)}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Nav;

import React from 'react';
// import { capitalizeFirstLetter } from "../utils/helpers";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (

    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;

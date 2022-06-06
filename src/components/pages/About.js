import React from "react";
import profileImage from "../../../src/assets/profile-photo.jpg";

export default function About() {
  return (
    <div className="background">
      <div className='img-name'>
        <img src={profileImage} className='profileImg' alt="profile" />
        <h1>Blair Seivers</h1>
      </div>
      <div className='bio'>
        <h2 className='work'>
           I am an aspiring web developer who has
          just completed the Coding Bootcamp through UNC and am eager to
          continue learning and practicing my skills.
        </h2>
        <h2 className='hobbies'>
          I have 3 dogs who are my whole entire world. We enjoy hiking, 
          swimming, running and doing all of the fun things outside. 
          I got into this field for the opportunity to work remotely 
          so that I could spend more time doing the things that I love.
        </h2>
      </div>
      
    </div>
  );
}

import React from "react";
import profileImage from "../../../src/assets/profile-photo.jpg";

export default function About() {
  return (
    <div className="about">
      <div>
        <img src={profileImage} className='profileImage' alt="profile" />
      </div>
        <h2 className='bio'>
          My name is Blair Seivers and I am an aspiring web developer. I have
          just completed the Coding Bootcamp through UNC and am eager to
          continue learning and practicing my skills.
        </h2>
    </div>
  );
}

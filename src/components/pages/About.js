import React from 'react';
import profileImage from '../../assets/profile-photo.jpg';

export default function About() {
  return (
    <div className='my-5'>
      <h1 id='about'>About Me:</h1>
      <img src={profileImage} className='my-2' style={{ width: '30%'}} alt='profile image' /> 
      <p>
        My name is Blair Seivers and I am an aspiring web developer. 
        I have just completed the Coding Bootcamp through UNC and 
        am eager to continue learning and practicing my skills.
      </p>
    </div>
  );
}

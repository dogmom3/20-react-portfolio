import React from "react";
import resume from '../../assets/Blair_Seivers_Resume.pdf'
import resume_img from '../../assets/resume-img.png'
export default function Resume() {
    return (
<div className='background'>
    <div className='list'>
        <h1 className='list-title'>Proficiencies</h1>
        <div className='list-columns'>
            <ol className='skills'>
                <li>CSS</li>
                <li>Bulma</li>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Handlebars</li>
                <li>JavaScript</li>
                <li>JQuery</li>
            </ol>
            <ol className='skills'>
                <li>Node.JS</li>
                <li>Express.JS</li>
                <li>MYSQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Server Side API's</li>
                <li>Third Party API's</li>
            </ol>
        </div>
    </div>
    <div className='resume'>
        <img src={resume_img} alt='resume' className='resumeImg'/>
        <div className='image-overlay image-overlay-blur'>
  
            <a href = {resume} className='link' target='blank'>Checkout my Resume!</a>
        </div>
    </div>
</div>
        );
    }
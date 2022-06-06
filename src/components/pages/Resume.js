import React from "react";
import resume from ''
import resume_img from ''
export default function Resume() {
    return (
<div className='resumePage'>
   <h2>List of Proficiencies:</h2>
   <ol className='resumeList'>
       <li>CSS</li>
       <li>JavaScript</li>
       <li>Handlebars</li>
       <li>React</li>
   </ol>
    <div className='resume'>
        <img src={resume_img} alt='resume' className='resumeImg'/>
        <div className='image-overlay image-overlay-blur'>
  
            <a href = {resume} target='blank'>Checkout my Resume!</a>
        </div>
    </div>
</div>
        );
    }
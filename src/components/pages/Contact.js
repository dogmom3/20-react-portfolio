import React from "react";

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <form className="contact-form">
        {/* <div> */}
          <label for="name">Name:</label>
          <input type="text" id="name" />
        {/* </div> */}
        {/* <div> */}
          <label for="email">Email:</label>
          <input type="text" id="email" />
        {/* </div> */}
        {/* <div> */}
          <label for="message">Message:</label>
          <textarea type="text" id="message"></textarea>
        {/* </div> */}
        {/* <div> */}
          <button className='submitBtn' type="submit">Send</button>
        {/* </div> */}
      </form>
    </div>
  );
}

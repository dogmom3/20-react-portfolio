import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <form class="contact-form">
        <div>
          <label for="name">NAME:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label for="email">EMAIL:</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label for="message">MESSAGE:</label>
          <textarea type="text" id="message"></textarea>
        </div>
        <div>
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>
  );
}

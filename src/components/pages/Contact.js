import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} Required Field.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <div className="background">
      <form className="contact-form" onSubmit={handleSubmit}>
      <h1>Send me a Message!</h1>

        <div className="sendMsg">
          <label for="name">Name:</label>
          <div>
          <input type="text" id="name"
            defaultValue={name} onBlur={handleChange}/>
          </div>
          <label for="email">Email:</label>
          <div>
          <input type="text" id="email"
            defaultValue={email} onBlur={handleChange}/>
          </div>
        </div>

        <div className='sendMsg'>
          <label for="message">Message:</label>
          <div>
          <textarea type="text" id="message"
            defaultValue={message} onBlur={handleChange}></textarea>
          </div>
          {errorMessage && (
          <div className='errMsg'>
              <p className="error-text">{errorMessage}</p>
          </div>
          )}
        </div>
        <div className='sendMsg'>
          <button className="submitBtn" type="submit">
            Send
          </button>
        </div>

      </form>
    </div>
  );
}

import React  from  "react";
import  { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [message , setMessage] = useState("");

  const sendMail = () => {
    const data = {
      to_name:name,
      to_email:email,
      message:message
    }
    const service_id = "service_5pj2nzs";
    const template_id="template_6f5zhqo";
    const user_id = "-ww2aacX-YSkKZlOT";

    emailjs.send(service_id, template_id, data, user_id)
    .then((response) => {
      alert("Message sent successfully");
    })
    .catch((error) => {
      console.log(error);
    });
  
  };
  

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form  className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          onChange={(e)=>setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="user_email" 
          placeholder="Your Email"
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <textarea
          name="user_message" 
          placeholder="Your Message"
          onChange={(e)=>setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="cbtn" onClick={sendMail}>Send Message</button>
      </form>
    </div>
  );
}

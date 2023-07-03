import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Your Name', // Replace with the recipient's name
      message: message,
    };

    emailjs
      .send('service_eqg1v4u', 'template_zjcs08p', templateParams, 'JBbH6W8KbZVIgbjAq')
      .then((response) => {
        console.log('Email successfully sent!', response.text);
        // Add any success message or additional logic here
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Add any error handling or display an error message here
      });

    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
  <div className="bg-neutral-500 rounded-lg mt-10 flex flex-col lg:flex-row justify-around p-5">
    <form onSubmit={handleSubmit}>
    <div className="flex flex-col w-fit mx-auto gap-2">
    <h1 className="text-3xl">Email me anytime</h1>
      <input
        className="p-2 rounded-lg w-fit"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="p-2 rounded-lg w-fit"
      	
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="p-2 rounded-lg w-fit"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button className="btn bg-emerald-700 text-black" type="submit">Send Email</button>
      </div>
    </form>
	<div>	
    	<h1 className="text-3xl">Connect with me</h1>
		<div className="flex flex-col gap-10">
		<div className="flex flex-col lg:flex-row mt-10">
		<a href="https://github.com/gwynbleiddrivia" target="_blank" className="w-full"><FaGithub className="w-full"/></a>
		<a href="https://www.linkedin.com/in/md-yasin-arafat-khondoker-296504143/" target="_blank" className="w-full"><FaLinkedin className="w-full"/></a>
		<a href="https:/m.me/mdyasinarafat.arnab/" className="w-full" target="_blank"><FaFacebookMessenger className="w-full"/></a>
		</div>
		<div className="flex m-auto w-fit justify-evenly">
		<FaWhatsapp className="my-auto"/> <p className="my-auto"> 8801733770008 (Whatsapp)</p> 
		</div>
		<div className="flex m-auto w-fit justify-evenly">
		<FaPhoneSquare className="my-auto"/> <p className="my-auto"> 8801572044257(Phone)</p> 
		</div>
		</div>
	</div>
    </div>
  );
};

export default ContactForm;


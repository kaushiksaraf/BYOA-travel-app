import NavBar from "../Navbar/Navbar.jsx";

import Footer from "../Footer/Footer.jsx";
import "./contact.css";
import img2 from "../../assets/contact.avif";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  console.log(name, email, message);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    console.log(res);
    if (!res) {
      alert("invalid submit");
    } else {
      alert("succesfully submitted");
    }
  };

  return (
    <>
      <NavBar />
      <img src={img2} className="cntimg" alt="contactimg" />

      {/* <form method="POST" className="contact"   onSubmit={handleSubmit}>
        <label>Name</label>
        <input
        value={name}
          type="text"
          className=""
          placeholder="name"
          onChange={handleName}
        />

        <label>Email</label>
        <input
        value={email}
          type="text"
          className=""
          placeholder="email"
          onChange={handleEmail}
        />

        <label>Message</label>
        <input
        value={message}
          type="text"
          className="msg"
          placeholder="write your message here"
          onChange={handleMessage}
        />
        <button type="submit">Submit</button>
      </form> */}

      <form className="contact">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleName}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          required
        />

        <label>Message</label>
        <textarea
          placeholder="Write your message here"
          value={message}
          onChange={handleMessage}
          required
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <Footer />
    </>
  );
}

export default Contact;

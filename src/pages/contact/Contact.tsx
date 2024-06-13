import React, { ChangeEvent, FormEvent, useState } from "react";
import "./Contact.css";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
interface Contact {
  name: string;
  email: string;
  message: string;
}
let initial: Contact = {
  name: "",
  email: "",
  message: "",
};
const Contact: React.FC = () => {
  const [formData, setFormData] = useState<Contact>(initial);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container">
      <div className="f">
        <div className="f1">
          <h1>Contact us</h1>
          <p>
            Send for us your request and we will get in touch with you as soon
            as possible
          </p>
          <div className="f2">
            <img src={phone} alt="" />
            <h2>+380 98 782 82 23</h2>
          </div>
          <div className="f2">
            <img src={mail} alt="" />
            <h2>mailmail@gmail.com</h2>
          </div>
        </div>
        <div className="f3">
          <form onSubmit={handleSubmit} action="">
            <p>Name</p>
            <input
              onChange={handleChange}
              required
              type="text"
              name="name"
              id=""
              placeholder="Your name"
            />
            <p>E-mail</p>
            <input
              onChange={handleChange}
              required
              type="email"
              name="email"
              id=""
              placeholder="Your email"
            />
            <p>Message</p>
            <input
              style={{ padding: "14px 0px 91px 24px" }}
              onChange={handleChange}
              required
              name="message"
              id=""
              placeholder="Your message"
            />
            <div className="f4">
              <button>Send request</button>
              <h3>By sending request you agree to out Pivacy&Policy</h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

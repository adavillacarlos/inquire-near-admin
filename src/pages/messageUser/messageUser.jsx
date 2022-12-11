
import "./message.scss";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Title from "../../components/layout/Title";
import React from 'react'
import emailjs from '@emailjs/browser';
import {useRef} from 'react';
// import { useParams } from "react-router-dom";
// import UserController from "../../controllers/user/UserController";

const Message = ({}) => { 
  // const { userId } = useParams();
  // const { userData } = UserController(userId);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_teuvahp', 'template_fo3u0n3', form.current, 'Cu90ICgeCqkN806aa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Title title="Compose Message" />
        <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label className="form-label" >
            Email
          </label>
          <input className="form-control" 
          type="email" 
          name="email" 
          
          required /> 
       
        </div>
        <div className="mb-3">
          <label className="form-label">
            Name
          </label>
          <input className="form-control" 
          type="text" 
          name="name" 
          required />
        </div>
        
        <div className="mb-3">
          <label className="form-label">
            Subject
          </label>
          <input className="form-control" 
          type="text" 
          name="subject" 
          required/>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Message
          </label>
          <textarea className="form-control" 
          name="message" 
          required />
        </div>
        <input className="btn btn-danger" value="Send" type="submit"/>
      </form>
    </div>
      </div>
    </div>
  );
};

export default Message;
import React, { useState } from "react";

export const ContactCard = ({ contact }) => {
  const [showAge, setShowAge] = useState("");

  return (
    <div className="contact-card">
      <img src={contact.picture.large} alt=""></img>
      <div className="user-details">
        <p>Name: {contact.name.first + " " + contact.name.last}</p>
        <p>Email: {contact.email} </p>
        <button onClick={() => setShowAge(!showAge)}>
          {showAge ? "hideAge" : "showAge"}
        </button>
              {showAge && <p>Age: {contact.dob.age }</p>}
      </div>
    </div>
  );
};

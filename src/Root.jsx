import React, { useEffect, useState } from "react";
import { ContactCard } from "./ContactCard";
import "./RootStyle.css";

export const Root = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?gender=male&results=20")
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
  }, []);

  return (
    <div>
      {people.map((contact) => (
        <ContactCard contact={contact} />
      ))}
    </div>
  );
};

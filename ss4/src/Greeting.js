import React, { useEffect, useState } from "react";
export default function Greeting() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {}, [firstName, lastName]);

  return (
    <>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <br />
        <p>
          Hello,{" "}
          <span>
            {firstName} {lastName}
          </span>
        </p>
      </div>
    </>
  );
}

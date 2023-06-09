import React from "react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [ data, setData ] = useState('')

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleDataChange = (event) => {
    setData(event.target.value);
  }

  return (
    <div>
    <h1>Contact Me</h1>
    <br />
      <h3>
        Complain, profess your love, tell it how it is, or beat around the bush.
      </h3>
      <input type="email" className="form-email" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
      <textarea type="text" value={data} onChange={handleDataChange} class="form-control" aria-label="With textarea" placeholder="Yell at me"></textarea>
      <button type="submit" className="btn btn-success" onClick={() => localStorage.setItem('data', data)}> Submit to a duel</button>
      <br />
    </div>
  );
}


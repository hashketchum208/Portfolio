import React from "react";

export default function Contact() {
  return (
    <div>
    <h1>Contact Me</h1>
    <br />
      <h3>
        Complain, profess your love, tell it how it is, or beat around the bush.
      </h3>
      <input type="email" class="form-email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
      <textarea class="form-control" aria-label="With textarea" placeholder="Yell at me"></textarea>
      <button type="button" class="btn btn-success">Submit to a duel</button>
      <br />
    </div>
  );
}

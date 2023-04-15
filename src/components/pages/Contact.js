import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>Contact info</h1>
      <h3>
        Please feel free to tell me what i can improve on and checkout some of
        my resume
      </h3>
      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      ></input>
      <textarea class="form-control" aria-label="With textarea"></textarea>
      <button>Submit</button>
    </div>
  );
}

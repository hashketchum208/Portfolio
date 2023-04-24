import React from "react";
import DEVresume from "../DEVresume.png"

export default function Resume() {
  return (
    <div>
      <h1>My Resume</h1>
      <h3>
       <img src={DEVresume} alt="resume"></img>
      </h3>
      <h2>
        <a href="../DEVresume.png" attributes-list download>Resume link</a>
      </h2>
      
   </div>
  )
}

import React from "react";
import BeFunkyPhoto2 from "../BeFunky-photo2.jpg";
import javascript1 from "../javascript1.png";
import mysql from "../mysql.png";
import logo512 from "../logo512.png";
import node from "../node.png";
import apolloClient from "../apollo_client.png";
import Regex from "../Regex.jpg";
import mongodb2 from "../mongodb2.png";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
    <br />
      <h3>
        Hi, My name is Leo Pignanelli, I am currently a student at the
        University of Utah's Professional Education Bootcamp for Full Stack Web
        Development. I have been spending the last 2 years fine tuning my skills
        in JavaScript, Node.js, Express.js, and React.js. My forte is backend.
        Im skilled in the usage of MySQL, MongoDB, Apollo, Insomnia, and TablePlus. I
        currently live in Mccammon, Idaho with my wife and 2 children. In 5 years I
        hope to be established in a backend engineering career, working my days
        away at home.
      </h3>
      <br />
      <div>
        <img class="w-25" src={BeFunkyPhoto2} alt="me"></img>
        <img class="w-25 p-3" src={javascript1} alt="1"></img>
        <img class="w-25 p-3" src={mysql} alt="SQL"></img>
        <img class="w-25 p-3" src={logo512} alt="react"></img>
        <img class="w-25 p-3" src={node} alt="node"></img>
        <img class="w-25 p-3" src={apolloClient} alt="apollo"></img>
        <img class="w-25 p-3" src={Regex} alt="regex"></img>
        <img class="w-25 p-3" src={mongodb2} alt="mongodb2"></img>
      </div>
    </div>
  );
}

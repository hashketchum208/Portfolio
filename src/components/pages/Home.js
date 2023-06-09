import React from "react";
import gradBanner from "../gradBanner.png"

export default function Home() {
  return (
    <div>
      <h1>Leo Pignanelli's Portfolio</h1>
      <h3>
        What's better than owning your own home? 
        <strong>Owning your own Home Page!!</strong> 
        Who needs a house when you can just program out in the street. 
        Maybe a passing Oracle will toss me a job.
      </h3>
      <br />
      <h1>
        Class Projects and Time Wasters
      </h1>
      <div>
        <ul>
          <a href="https://github.com/sifrult/streaming_locator">Project1-Movie Finder</a>
          <br />
          <a href="https://github.com/ValentaCodes/DiveIn">Project2-Boat Rental App</a>
          <br />
          <a href="https://github.com/Grey-pearson/we-believe-forum">Project3-Paranormal Blog</a>
          <br />
          <a href="https://github.com/hashketchum208/Just_A_Thought">Social Network API</a>
          <br />
          <a href="https://github.com/hashketchum208/REST_2_MERN">refactored RESTful API to GraphQL API</a>
          <br />
          <a href="https://github.com/hashketchum208/RegEx_tutorial">RegEx_tutorial</a>
          <br />
        </ul>
      </div>
      <br />
      <img class="w-25" src={gradBanner} alt="me"></img>
    </div>
  );
}

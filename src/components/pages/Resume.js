import React from "react";
import DEVresume from "../DEVresume.pdf"

export default function Resume() {

    const onButtonClick = () => {
        const fileURL = 'DEVresume.pdf';
        const a = document.createElement('a');
        a.href = fileURL;
        a.download = 'DEVresume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

  return (
    <div>
      <h1>My Resume</h1>
      <h3>
       <img src={DEVresume} alt="resume"></img>
      </h3>
      <div>
        <button type="download" className="btn btn-warning" onClick={onButtonClick}>
          Download Resume
        </button>        
      </div>
   </div>
  )
}

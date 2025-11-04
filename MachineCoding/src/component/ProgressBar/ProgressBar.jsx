import "./ProgressBar.css";
import { useState } from "react";

export const ProgressBar = () => {
  const [progressInput, setProgressInput] = useState("");

  const handleProgreeBar=(e)=>{
    let value=e.target.value
    if (value > 100 || value < 0) {
        
        return;
      } else {
        
        setProgressInput(value);
      }
  
  }
  return (
    <div className="progress-bar-container">
       <div className="heading">
       <h2>Frontend Machine Coding</h2>
        <h3>Progress Bar Component</h3>
       </div>
      <div className="bar-outer">
        <div
          className={`bar-fill ${progressInput ? "purple-class" : "white-class"}`}
          style={{ width: `${progressInput}%` }}
        >
            {progressInput}%
        </div>
      </div>

      <input
        type="number"
        value={progressInput}
        onChange={handleProgreeBar}
        className="bar-input"
      />
     
    </div>
  );
};

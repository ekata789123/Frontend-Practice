import "./StepperComponent.css";
import { useState } from "react";
import { StepUIComponent } from "./StepUIComponent";

export const StepperComponent = () => {
  const data = ["task1", "task2", "task3"];
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrent((next) => Math.min(next + 1, data.length ));
  };

  return (
    <div className="stepper-container">
      <div className="heading-stepper">
        <h2>Frontend Machine Coding</h2>
        <h3> React Interview Question(Stepper)</h3>
      </div>
      <StepUIComponent step={current} data={data} />
      <div className="step-task-container">
        {data.map((item, index) =>
          current === index ? <span key={index}>{item}</span> : null
        )}
      </div>

      <div className="button-container-stepper">
        <button onClick={handlePrev} disabled={current === 0}>
          Prev
        </button>
        <button onClick={handleNext} disabled={current === data.length  }>
          Next
        </button>
      </div>
    </div>
  );
};

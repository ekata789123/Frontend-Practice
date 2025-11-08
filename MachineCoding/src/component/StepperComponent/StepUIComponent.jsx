import "./StepperComponent.css";

export const StepUIComponent = ({ step, data }) => {
  return (
    <div className="stepui-container">
      {data.map((item, index) => {
        const isCompleted = index < step;
        const isActive = index === step;

        return (
          <div key={index} className="stepper-item">
            <div
              className="stepper-circle"
              style={{
                backgroundColor: isCompleted
                  ? "green" 
                  : isActive
                  ? "blue" 
                  : "#ccc", 
                color: isCompleted || isActive ? "white" : "#666",
                border: isActive
                  ? "2px solid blue"
                  : "2px solid transparent",
              }}
            >
              <div className="stepper-name">{isCompleted ? "✓" : index + 1}</div>
            </div>

            {index !== data.length - 1 && (
              <div
                className={`stepper-line ${
                  isCompleted ? "line-completed" : isActive ? "line-active" : ""
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

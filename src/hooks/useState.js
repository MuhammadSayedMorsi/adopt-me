import React, { useState } from "react";

const StateComponent = () => {
  // *** the first thing is the actually thing of state that i want to keep track &&& and the secound thins which is (setIsGreen) function to update that piece of state,
  const [isGreen, setIsGreen] = useState(true);
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div>
      <button
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "red" }}
      >
        use state
      </button>
    </div>
  );
};

export default StateComponent;

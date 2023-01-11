import React from "react";

function Child({handleClick}) {
    return (
      <div>
        <button onClick={handleClick}>Trigger parent</button>
      </div>
    );
  }
  

export default Child;

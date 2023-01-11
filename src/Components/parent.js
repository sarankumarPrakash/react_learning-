import React from "react";
import Child from "./child";


export default function Parent() {
    const handleClick = num => {
      // 👇️ take parameter passed from Child component
      alert(`value triggerd`);
    };
    return (
      <div>
        <Child handleClick={handleClick} />
      </div>
    );
}